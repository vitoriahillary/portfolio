'use client'

import { useState } from 'react'
import { TabItem } from './Tabitem'
import * as Tab from '@radix-ui/react-tabs'

export function Tabs() {
    const [currentTab, setCurrentTab] = useState('tab1')

    return (
        <Tab.Root value={currentTab} onValueChange={setCurrentTab}>
            <Tab.List className='mt-6 flex flex-col lg:flex-row items-start lg:items-center gap-6 border-b border-zinc-50'>
                <TabItem route='/#home' value='tab1' description='Home' isSelected={currentTab === 'tab1'}/>
                <TabItem route='/#about-me' value='tab2' description='Sobre Mim' isSelected={currentTab === 'tab2'}/>
                <TabItem route='/projects' value='tab3' description='Projetos' isSelected={currentTab === 'tab3'}/>
                <TabItem route='/#contact' value='tab4' description='Contato' isSelected={currentTab === 'tab4'}/>
            </Tab.List>
        </Tab.Root>
    )
}