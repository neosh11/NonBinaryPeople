import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { pageNames } from '../../../../lib/pageDetails'
import { CountryMap } from '../../../../data/countries'
import { supportGroups } from '../../../../data/support'
import Button from '../../../Button'
import Card from '../../../Card'
import SupportCard from './SupportCard'
import GetInTouchButton from '../../../Button/GetInTouchButton'

interface DataProp {
  location: number | ''
}
const ChoiceForm = ({ setData, register, handleSubmit, reset }) => {
  const onChange = data => {
    console.log(data)

    const newData: DataProp = {
      location: data.location != '' ? Number(data.location) : ''
    }
    setData(newData)
  }
  const onReset = () => {
    setData({
      location: ''
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
        <Button type='button' onClick={() => onReset()}>
          Reset
        </Button>
      </form>
    </>
  )
}

const Communities = () => {
  const [data, setData] = useState<DataProp>({
    location: ''
  })

  const { register, handleSubmit, reset } = useForm({
    defaultValues: data
  })
  return (
    <>
      <Card>
        <div className='md:flex md:flex-col space-y-4 md:items-center'>
          <h1>{pageNames.support}</h1>
          <h2>Find support available around you!</h2>
          <p>
            We know that sometimes things can get difficult or complicated - and it can be difficult for everyone to
            find the support they might need at a times like these.
            <br />
            So we have decided to compile a list of support links which
            <br />
            If you know of any communities which belong here, please let us know{' '}
            <span role='img' aria-labelledby='heart'>
              ❤️
            </span>
            !
          </p>
          <div className='md:space-x-4 md:space-y-0 space-y-4'>
            If you want to list your own support network!
            <GetInTouchButton />
          </div>
        </div>
      </Card>

      {/* Form here */}
      <ChoiceForm setData={setData} register={register} handleSubmit={handleSubmit} reset={reset} />

      {supportGroups
        .filter(x => {
          if (data.location === '') return true
          else return x.country === data.location
        })
        .map((x, i) => {
          return <SupportCard key={i} support={x} />
        })}
    </>
  )
}
export default Communities
