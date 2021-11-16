import { SetStateAction, useEffect, useMemo } from 'react'
import { mutateReports, getAllReports } from 'api'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { ProjectProps, GatewayProps } from 'models/project'
import { IReportsData } from 'models/project'

interface UseFilterProps {
  projects: ProjectProps[]
  gateways: GatewayProps[]
}

const INITIAL_SELECTED_PROJECT = 'Select project'
const INITIAL_SELECTED_GATEWAY = 'Select project'
const INITIAL_SELECTED_TO_DATE = 'To date'
const INITIAL_SELECTED_FROM_DATE = 'From date'

export default function useFilter({ projects, gateways }: UseFilterProps) {
  const [project, setProject] = useState(INITIAL_SELECTED_PROJECT)
  const [gateway, setGateway] = useState(INITIAL_SELECTED_GATEWAY)
  const [fromDate, setFromDate] = useState<Date | string>(
    INITIAL_SELECTED_FROM_DATE || new Date()
  )
  const [toDate, setToDate] = useState<Date | string>(
    INITIAL_SELECTED_TO_DATE || new Date()
  )

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
  const [allReportsData, setAllReportsData] = useState<
    IReportsData[] | undefined
  >(undefined)
  const { mutate, data: mutateReportsData } = useMutation(mutateReports)

  const memoizedFilteredProjects: undefined | Record<string, IReportsData> =
    useMemo(() => {
      if (typeof allReportsData !== 'undefined') {
        const filteredProjects: any = {}
        allReportsData.forEach((reportData) => {
          if (filteredProjects.hasOwnProperty(reportData.projectId)) {
            filteredProjects[reportData.projectId].push({ ...reportData })
          } else {
            filteredProjects[reportData.projectId] = []
          }
        })
        return filteredProjects
      }
    }, [allReportsData])
  const onGenerateHandler = (): void => {
    const projectId = projects?.find(
      (p: ProjectProps) => p.name === project
    )?.projectId
    const gatewayId = gateways?.find(
      (g: GatewayProps) => g.name === gateway
    )?.gatewayId

    if (
      typeof projectId !== 'undefined' &&
      typeof gatewayId !== 'undefined' &&
      typeof fromDate !== 'string' &&
      typeof toDate !== 'string'
    ) {
      const body = {
        projectId,
        gatewayId,
        from: fromDate.toISOString().split('T')[0],
        to: toDate.toISOString().split('T')[0],
      }
      mutate(body)
    }
  }

  useEffect(() => {
    async function run() {
      const { data } = await getAllReports()
      const allReportsData: IReportsData[] | undefined = data?.data

      setAllReportsData(
        allReportsData as SetStateAction<IReportsData[] | undefined>
      )
    }
    run()
  }, [])
  const didUserChoose = () => {
    return (
      project !== INITIAL_SELECTED_PROJECT &&
      gateway !== INITIAL_SELECTED_GATEWAY &&
      toDate !== INITIAL_SELECTED_TO_DATE &&
      fromDate !== INITIAL_SELECTED_FROM_DATE
    )
  }

  const reportsData: IReportsData[] | undefined = mutateReportsData?.data?.data
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
    reportsData,
    memoizedFilteredProjects,
    didUserChoose,
  }
}
