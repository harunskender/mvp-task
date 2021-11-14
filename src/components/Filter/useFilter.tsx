import { useState } from 'react'
import { dateToString } from 'utils'

export default function useFilter() {
  const [project, setProject] = useState('All projects')
  const [gateway, setGateway] = useState('All gateways')
  const [fromDate, setFromDate] = useState<Date | string>(
    'From date' || new Date()
  )
  const [toDate, setToDate] = useState<Date | string>('To date' || new Date())

  const onProjectClickHandler = (value: string): void => {
    setProject(value)
  }
  const onGatewayClickHandler = (value: string): void => {
    setGateway(value)
  }
  const onFromDateClickHandler = (value: Date): void => {
    setFromDate(value)
  }
  const onToDateClickHandler = (value: Date): void => {
    setToDate(value)
  }
  const onGenerateHandler = (): void => {
    console.log(project, gateway, dateToString(fromDate), dateToString(toDate))
  }
  return {
    project,
    gateway,
    fromDate,
    toDate,
    onProjectClickHandler,
    onGatewayClickHandler,
    onFromDateClickHandler,
    onToDateClickHandler,
    onGenerateHandler,
  }
}
