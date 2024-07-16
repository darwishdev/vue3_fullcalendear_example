import { EventInput } from '@fullcalendar/core'
import { ResourceSourceInput } from '@fullcalendar/resource'
export const resourceAreaColumns = [
    {
        group: true,
        field: 'property_name',
        width: 80,
        headerContent: 'Property'
    },
    {
        field: 'reservable_unit_name',
        width: 100,
        headerContent: 'Room Type'
    },
    {
        width: 30,
        field: 'minimum_guests_number',
        headerContent: 'Min'
    },
    {
        width: 30,
        field: 'maximum_guests_number',
        headerContent: 'Max'
    }
]
export const resources: ResourceSourceInput = [
    {
        id: "1",
        property_name: "Rhactus Hotel",
        reservable_unit_name: "Rhactus Deluxe Family",
        maximum_guests_number: 4,
        minimum_guests_number: 1
    },
    {
        id: "2",
        property_name: "Rhactus Hotel",
        reservable_unit_name: "Rhactus Deluxe King",
        eventColor: "red",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "3",
        property_name: "Rhactus Hotel",
        reservable_unit_name: "Rhactus Premium King",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "4",
        property_name: "Rhactus Hotel",
        reservable_unit_name: "Rhactus Deluxe Triple",
        maximum_guests_number: 3,
        minimum_guests_number: 1
    },
    {
        id: "5",
        property_name: "Rhactus Hotel",
        reservable_unit_name: "Rhactus Deluxe twin",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "6",
        property_name: "Marina Hills",
        reservable_unit_name: "Marina Hills one bedroom apartment",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "7",
        property_name: "Vida Marina Resort Marassi",
        reservable_unit_name: "Vida Deluxe - Garden View",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "8",
        property_name: "Vida Marina Resort Marassi",
        reservable_unit_name: "Vida Executive - Garden View",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "9",
        property_name: "Marassi Boutique Hotel",
        reservable_unit_name: "Marassi boutique - Double Room",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "10",
        property_name: "Marassi Boutique Hotel",
        reservable_unit_name: "Marassi boutique - Royal Suite",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "11",
        property_name: "Tawila Island Resort",
        reservable_unit_name: "Tawila - Standard Bungalow",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "12",
        property_name: "Tawila Island Resort",
        reservable_unit_name: "Tawila - Deluxe Bungalow",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "13",
        property_name: "Tawila Island Resort",
        reservable_unit_name: "Tawila - Superior Bungalow",
        maximum_guests_number: 2,
        minimum_guests_number: 1
    },
    {
        id: "14",
        property_name: "Apartment In Porto El Sokhna",
        reservable_unit_name: "Porto El Sokhna - Two Bedroom Apartment",
        maximum_guests_number: 4,
        minimum_guests_number: 1
    },
    {
        id: "15",
        property_name: "Telal sokhna Villa",
        reservable_unit_name: "Telal El Sokhna Villa",
        maximum_guests_number: 8,
        minimum_guests_number: 1
    }
]

export const events: EventInput[] = [
    {
        start: "2024-07-05",
        end: "2024-07-09",
        date_id: 20240705,
        price_1: 7669,
        price_2: 8334,
        price_3: 8987,
        price_4: 9415,
        property_id: 6,
        resourceId: "1",
        inventory_id: 59,
        rate_plan_id: 1,
        color: "purple",
        property: "Rhactus Hotel",
        title: "Standard Rate",
        reservable_unit_name: "Rhactus Deluxe Family",
        maximum_guests_number: 4,
        minimum_guests_number: 1
    },
    {
        start: "2024-07-04",
        end: "2024-07-10",
        date_id: 20240704,
        price_1: 7841,
        price_2: 8634,
        price_3: 9063,
        price_4: 9487,
        property_id: 6,
        resourceId: "2",
        inventory_id: 60,
        rate_plan_id: 1,
        color: "blue",
        property: "Rhactus Hotel",
        title: "Standard Rate",
        reservable_unit_name: "Rhactus Deluxe Family",
        maximum_guests_number: 4,
        minimum_guests_number: 1
    },
    {
        start: "2024-07-03",
        end: "2024-07-12",
        date_id: 20240703,
        price_1: 7519,
        price_2: 8560,
        price_3: 8697,
        price_4: 9337,
        property_id: 6,
        resourceId: "3",
        color: "green",
        inventory_id: 61,
        rate_plan_id: 1,
        property: "Rhactus Hotel",
        title: "Standard Rate",
        reservable_unit_name: "Rhactus Deluxe Family",
        maximum_guests_number: 4,
        minimum_guests_number: 1
    },
    {
        start: "2024-07-02",
        end: "2024-07-09",
        date_id: 20240702,
        color: "brown",
        price_1: 7980,
        price_2: 8206,
        price_3: 9144,
        price_4: 9426,
        property_id: 6,
        resourceId: "3",
        inventory_id: 62,
        rate_plan_id: 1,
        property: "Rhactus Hotel",
        title: "Standard Rate",
        reservable_unit_name: "Rhactus Deluxe Family",
        maximum_guests_number: 4,
        minimum_guests_number: 1
    },
    {
        start: "2024-07-01",
        end: "2024-07-06",
        date_id: 20240701,
        price_1: 8058,
        price_2: 8446,
        price_3: 8773,
        price_4: 9397,
        property_id: 6,
        resourceId: "4",
        inventory_id: 63,
        rate_plan_id: 1,
        property: "Rhactus Hotel",
        title: "Standard Rate",
        reservable_unit_name: "Rhactus Deluxe Family",
        maximum_guests_number: 4,
        minimum_guests_number: 1
    }
]