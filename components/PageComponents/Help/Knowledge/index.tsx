import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { pageNames } from '../../../../lib/pageDetails'
import { informationCommunities, OnlineGroupMap } from '../../../../data/communities'
import Button from '../../../Button'
import Card from '../../../Card'
import OnlineCommunityCard from '../Cards/OnlineCommunityCard'
import GetInTouchButton from '../../../Button/GetInTouchButton'

interface DataProp {
  online: number | ''
}
const ChoiceForm = ({ setData, register, handleSubmit, reset }) => {
  const onChange = data => {
    const newData: DataProp = {
      online: data.online != '' ? Number(data.online) : ''
    }
    setData(newData)
  }
  const onReset = () => {
    setData({
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

        <Button type='button' onClick={() => onReset()}>
          Reset
        </Button>
      </form>
    </>
  )
}

const Knowledge = () => {
  const [data, setData] = useState<DataProp>({
    online: ''
  })

  const { register, handleSubmit, reset } = useForm({
    defaultValues: data
  })
  return (
    <>
      <Card>
        <div className='md:flex md:flex-col space-y-4 md:items-center'>
          <h1>{pageNames.knowledge}</h1>
          <h2>There&apos;re plenty of resources you can use to get information!</h2>
          <p>
            Sometimes it can be hard to find information about non-binary topics.
            <br />
            So we have decided to compile a list of information resources which are non-binary focused.{' '}
            <span role='img' aria-labelledby='heart'>
              ❤️
            </span>
            <br />
            If you know of any more resources which should belong here, please let us know{' '}
            <span role='img' aria-labelledby='heart'>
              😄
            </span>
            !
          </p>
          <div className='md:space-x-4 md:space-y-0 space-y-4'>
            If you want to list your own community
            <GetInTouchButton />
          </div>
        </div>
      </Card>

      {/* Form here */}
      <ChoiceForm setData={setData} register={register} handleSubmit={handleSubmit} reset={reset} />

      {informationCommunities
        .filter(x => {
          if (data.online === '') return true
          return x.group === data.online
        })
        .map((x, i) => {
          return <OnlineCommunityCard key={i} community={x} />
        })}
    </>
  )
}
export default Knowledge
