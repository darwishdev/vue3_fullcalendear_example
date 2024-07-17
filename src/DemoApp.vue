<script setup lang='ts'>
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import { CalendarOptions, EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/core'
import { createEventId } from './event-utils'
import { events, resourceAreaColumns, resources } from './data'

const calendarOptions = ref<CalendarOptions>({
    plugins: [resourceTimelinePlugin, interactionPlugin],
    height: 500,
    timeZone: 'UTC',
    headerToolbar: {
        left: 'today prev,next',
        center: 'title',
        right: 'resourceTimelineMonth,resourceTimelineWeek,resourceTimelineYear'
    },
    initialView: 'resourceTimelineMonth',
    aspectRatio: 1.5,
    views: {
        resourceTimelineWeek: {
            buttonText: 'Three Monthes',
            duration: { days: 90 },
        },
    },
    selectable: true,
    editable: true,
    expandRows: true,
    selectMirror: true,
    select: handleDateSelect,
    eventClick: handleEventClick,
    eventsSet: handleEvents,
    resourceAreaColumns,
    resources,
    events
})

const currentEvents = ref([] as EventApi[])

function handleDateSelect(selectInfo: DateSelectArg) {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect() // clear date selection

    if (title) {
        calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
        })
    }
}

function handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
    }
}

function handleEvents(events: EventApi[]) {
    currentEvents.value = events
}
</script>

<template>
    <div class='demo-app'>
        <div class='demo-app-main'>
            <FullCalendar class='demo-app-calendar' :options='calendarOptions'>
                <template v-slot:eventContent='arg'>
                    <span>{{ arg.event.title }}</span>
                    <span v-for="price in arg.event.extendedProps.prices"> {{ price }} EGP</span>
                </template>
            </FullCalendar>
        </div>
    </div>
</template>

<style lang='css'>
h2 {
    margin: 0;
    font-size: 16px;
}

ul {
    margin: 0;
    padding: 0 0 0 1.5em;
}

li {
    margin: 1.5em 0;
    padding: 0;
}

b {
    /* used for event dates/times */
    margin-right: 3px;
}

.demo-app {
    display: flex;
    min-height: 100%;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
}

.demo-app-sidebar-section {
    padding: 2em;
}

.demo-app-main {
    flex-grow: 1;
    padding: 3em;
}

.fc {
    /* the calendar root */
    max-width: 1100px;
    margin: 0 auto;
}
</style>