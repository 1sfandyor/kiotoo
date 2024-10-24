
'use client'
import Link from 'next/link'
import {
  ChartPie,
  CheckSquare,
  Gear,
  HouseLine,
  Lifebuoy,
  PresentationChart,
  Stack,
  Users,
} from 'phosphor-react'
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarList,
} from 'keep-react'

export const KeepSidebar = () => {
  return (
    <Sidebar>
      <SidebarBody>
        <Link href="/" className="inline-flex items-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 dark:bg-metal-800 text-heading-6 font-semibold text-white">
            Kioto
          </span>
        </Link>
        <SidebarList>
          <SidebarItem>
            <HouseLine size={20} />
            House
          </SidebarItem>
          <SidebarItem>
            <PresentationChart size={20} />
            Dashboard
          </SidebarItem>
          <SidebarItem>
            <Stack size={20} />
            Projects
          </SidebarItem>
          <SidebarItem>
            <CheckSquare size={20} />
            Tasks
          </SidebarItem>
          <SidebarItem>
            <ChartPie size={20} />
            Reporting
          </SidebarItem>
          <SidebarItem>
            <Users size={20} />
            Users
          </SidebarItem>
          <SidebarItem>
            <Lifebuoy size={20} />
            Support
          </SidebarItem>
          <SidebarItem>
            <Gear size={20} />
            Settings
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
    </Sidebar>
  )
}
