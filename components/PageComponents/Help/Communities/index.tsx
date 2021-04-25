import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { pageNames } from '../../../../lib/pageDetails'
import { communities, onlineCommunities, OnlineGroupMap } from '../../../../data/communities'
import { CountryMap } from '../../../../data/countries'
import Button from '../../../Button'
import Card from '../../../Card'
import CommunityCard from './Cards/CommunityCard'
import OnlineCommunityCard from './Cards/OnlineCommunityCard'
import GetInTouchButton from '../../../Button/GetInTouchButton'

interface DataProp {
  type: 'online' | '' | 'regional'
  online: number | ''
  location: number | ''
}
const ChoiceForm = ({ data, setData, register, handleSubmit, reset }) => {
  const onChange = data => {
    console.log(data)

    const newData: DataProp = {
      type: data.type,
      online: data.online != '' ? Number(data.online) : '',
      location: data.location != '' ? Number(data.location) : ''
    }
    setData(newData)
  }
  const onReset = () => {
    setData({
      type: '',
      location: '',
      online: ''
    })
    reset()
  }
  const selectClass =
    'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
  const labelClass = 'block text-sm font-medium text-gray-700'
  return (
    <>
      <form onChange={handleSubmit(onChange)}>
        <Card>
          <label htmlFor='type' className={labelClass}>
            Type
          </label>
          <select id='type' name='type' className={selectClass} {...register('type')}>
            <option value='' key='typeAny'>
              Any
            </option>

            <option value='online' key='online'>
              Online
            </option>

            <option value='regional' key='regional'>
              Regional
            </option>
          </select>
        </Card>
        <Card>
          <label htmlFor='location' className={labelClass}>
            Location
          </label>
          <select id='location' name='location' className={selectClass} {...register('location')}>
            <option value='' key='countyNone'>
              Any
            </option>
            {Array.from(CountryMap.keys()).map(x => (
              <option value={x} key={CountryMap.get(x)}>
                {CountryMap.get(x)}
              </option>
            ))}
          </select>
        </Card>

        {(data.type == 'online') && (
          <Card>
            <label htmlFor='online' className={labelClass}>
              Platform
            </label>
            <select id='online' name='online' className={selectClass} {...register('online')}>
              <option value='' key='countyNone'>
                Any
              </option>
              {Array.from(OnlineGroupMap.keys()).map(x => (
                <option value={x} key={OnlineGroupMap.get(x)}>
                  {OnlineGroupMap.get(x)}
                </option>
              ))}
            </select>
          </Card>
        )}

        <Button type='button' onClick={() => onReset()}>
          Reset
        </Button>
      </form>
    </>
  )
}

const Communities = () => {
  const [data, setData] = useState<DataProp>({
    type: '',
    location: '',
    online: ''
  })

  const { register, handleSubmit, reset } = useForm({
    defaultValues: data
  })
  return (
    <>
      <Card>
        <div className='md:flex md:flex-col space-y-4 md:items-center'>
          <h1>{pageNames.communities}</h1>
          <h2>There are plenty of communities you can become a part of!</h2>
          <div className='md:space-x-4 md:space-y-0 space-y-4'>
            If you want to list your own community
            <GetInTouchButton/>
          </div>
        </div>
      </Card>

      {/* Form here */}
      <ChoiceForm setData={setData} data={data} register={register} handleSubmit={handleSubmit} reset={reset} />

      {(data.type === '' || data.type === 'regional') &&
        communities
          .filter(x => {
            if (data.location === '') return true
            else return x.country === data.location
          })
          .map((x, i) => {
            return <CommunityCard key={i} community={x} />
          })}

      {(data.type === '' || data.type === 'online') &&
        onlineCommunities
          .filter(x => {
            if (data.location === '' && data.online === '') return true
            if (data.location === '' && data.online !== '') return x.group === data.online
            if (data.location !== '' && data.online !== '')
              return x.group === data.online && x.location === data.location
            if (data.location !== '' && data.online === '') return x.location === data.location
          })
          .map((x, i) => {
            return <OnlineCommunityCard key={i} community={x} />
          })}
    </>
  )
}
export default Communities
