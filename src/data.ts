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
        "id": "1",
        "reservable_unit_name": "Rhactus Deluxe Family",
        "property_name": "Rhactus Hotel",
        "minimum_guests_number": 1,
        "maximum_guests_number": 4
    },
    {
        "id": "7",
        "reservable_unit_name": "Vida Deluxe - Garden View",
        "property_name": "Vida Marina Resort Marassi",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "10",
        "reservable_unit_name": "Marassi boutique - Royal Suite",
        "property_name": "Marassi Boutique Hotel",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "5",
        "reservable_unit_name": "Rhactus Deluxe twin",
        "property_name": "Rhactus Hotel",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "15",
        "reservable_unit_name": "Telal El Sokhna Villa",
        "property_name": "Telal sokhna Villa",
        "minimum_guests_number": 1,
        "maximum_guests_number": 8
    },
    {
        "id": "11",
        "reservable_unit_name": "Tawila - Standard Bungalow",
        "property_name": "Tawila Island Resort",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "8",
        "reservable_unit_name": "Vida Executive - Garden View",
        "property_name": "Vida Marina Resort Marassi",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "13",
        "reservable_unit_name": "Tawila - Superior Bungalow",
        "property_name": "Tawila Island Resort",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "6",
        "reservable_unit_name": "Marina Hills one bedroom apartment",
        "property_name": "Marina Hills",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "9",
        "reservable_unit_name": "Marassi boutique - Double Room",
        "property_name": "Marassi Boutique Hotel",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "12",
        "reservable_unit_name": "Tawila - Deluxe Bungalow",
        "property_name": "Tawila Island Resort",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "4",
        "reservable_unit_name": "Rhactus Deluxe Triple",
        "property_name": "Rhactus Hotel",
        "minimum_guests_number": 1,
        "maximum_guests_number": 3
    },
    {
        "id": "2",
        "reservable_unit_name": "Rhactus Deluxe King",
        "property_name": "Rhactus Hotel",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "3",
        "reservable_unit_name": "Rhactus Premium King",
        "property_name": "Rhactus Hotel",
        "minimum_guests_number": 1,
        "maximum_guests_number": 2
    },
    {
        "id": "14",
        "reservable_unit_name": "Porto El Sokhna - Two Bedroom Apartment",
        "property_name": "Apartment In Porto El Sokhna",
        "minimum_guests_number": 1,
        "maximum_guests_number": 4
    }
]
export const events: EventInput[] = [
    {
        "prices": [
            7675,
            8409,
            8753,
            9558
        ],
        "inventory_id": 1,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240720,
        "start": "2024-07-20",
        "end": "2024-07-20"
    },
    {
        "prices": [
            7705,
            8159,
            8948,
            9585
        ],
        "inventory_id": 8,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            7603,
            8203,
            8899,
            9441
        ],
        "inventory_id": 12,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            7450,
            8210,
            9140,
            9373
        ],
        "inventory_id": 16,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            7729,
            8512,
            8929,
            9315
        ],
        "inventory_id": 20,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            8014,
            8462,
            8961,
            9608
        ],
        "inventory_id": 24,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            7740,
            8327,
            8858,
            9577
        ],
        "inventory_id": 28,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            7845,
            8192,
            8844,
            9568
        ],
        "inventory_id": 32,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            7934,
            8627,
            8862,
            9647
        ],
        "inventory_id": 36,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            7591,
            8303,
            8734,
            9193
        ],
        "inventory_id": 40,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            7638,
            8552,
            8939,
            9568
        ],
        "inventory_id": 44,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            7997,
            8206,
            8694,
            9205
        ],
        "inventory_id": 47,
        "resourceId": "1",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            7521,
            8302,
            8651,
            9489
        ],
        "inventory_id": 48,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            7540,
            8611,
            8981,
            9397
        ],
        "inventory_id": 55,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            7927,
            8344,
            9090,
            9253
        ],
        "inventory_id": 59,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            8099,
            8570,
            8766,
            9313
        ],
        "inventory_id": 63,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            7474,
            8598,
            8924,
            9310
        ],
        "inventory_id": 67,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            7858,
            8194,
            8713,
            9304
        ],
        "inventory_id": 71,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            7943,
            8506,
            9025,
            9544
        ],
        "inventory_id": 75,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            8067,
            8623,
            9040,
            9156
        ],
        "inventory_id": 79,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            8047,
            8543,
            8953,
            9485
        ],
        "inventory_id": 83,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            7742,
            8441,
            9117,
            9603
        ],
        "inventory_id": 87,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            7481,
            8397,
            8731,
            9320
        ],
        "inventory_id": 91,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            7464,
            8484,
            8919,
            9503
        ],
        "inventory_id": 94,
        "resourceId": "1",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            8064,
            8549,
            8811,
            9208
        ],
        "inventory_id": 95,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            7491,
            8194,
            8919,
            9237
        ],
        "inventory_id": 102,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            7815,
            8546,
            9061,
            9267
        ],
        "inventory_id": 106,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            7514,
            8517,
            8935,
            9583
        ],
        "inventory_id": 110,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            7537,
            8405,
            8950,
            9374
        ],
        "inventory_id": 114,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            7706,
            8495,
            8655,
            9226
        ],
        "inventory_id": 118,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            7576,
            8481,
            8660,
            9221
        ],
        "inventory_id": 122,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            7881,
            8402,
            8970,
            9409
        ],
        "inventory_id": 126,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            8009,
            8301,
            8959,
            9201
        ],
        "inventory_id": 130,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            7937,
            8596,
            8986,
            9580
        ],
        "inventory_id": 134,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            7788,
            8446,
            8746,
            9632
        ],
        "inventory_id": 138,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            7993,
            8434,
            8873,
            9630
        ],
        "inventory_id": 141,
        "resourceId": "1",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            10955,
            11084
        ],
        "inventory_id": 142,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            10776,
            11395
        ],
        "inventory_id": 149,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            10428,
            11073
        ],
        "inventory_id": 153,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            10964,
            11312
        ],
        "inventory_id": 157,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            10784,
            11366
        ],
        "inventory_id": 161,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            10649,
            11112
        ],
        "inventory_id": 165,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            10569,
            11232
        ],
        "inventory_id": 169,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            10561,
            11122
        ],
        "inventory_id": 173,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            10840,
            11509
        ],
        "inventory_id": 177,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            10616,
            11334
        ],
        "inventory_id": 181,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            10732,
            11548
        ],
        "inventory_id": 185,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            10376,
            11436
        ],
        "inventory_id": 188,
        "resourceId": "2",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            10991,
            11535
        ],
        "inventory_id": 189,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            10976,
            11485
        ],
        "inventory_id": 196,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            10615,
            11200
        ],
        "inventory_id": 200,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            10619,
            11242
        ],
        "inventory_id": 204,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            10666,
            11208
        ],
        "inventory_id": 208,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            10705,
            11138
        ],
        "inventory_id": 212,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            10430,
            11474
        ],
        "inventory_id": 216,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            10694,
            11095
        ],
        "inventory_id": 220,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            10732,
            11099
        ],
        "inventory_id": 224,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            10957,
            11462
        ],
        "inventory_id": 228,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            10361,
            11356
        ],
        "inventory_id": 232,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            11031,
            11426
        ],
        "inventory_id": 235,
        "resourceId": "2",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            10380,
            11450
        ],
        "inventory_id": 236,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            10542,
            11432
        ],
        "inventory_id": 243,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            10779,
            11453
        ],
        "inventory_id": 247,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            10602,
            11433
        ],
        "inventory_id": 251,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            10655,
            11547
        ],
        "inventory_id": 255,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            10679,
            11279
        ],
        "inventory_id": 259,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            10978,
            11371
        ],
        "inventory_id": 263,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            10863,
            11387
        ],
        "inventory_id": 267,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            10918,
            11333
        ],
        "inventory_id": 271,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            10677,
            11215
        ],
        "inventory_id": 275,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            11050,
            11219
        ],
        "inventory_id": 279,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            10857,
            11369
        ],
        "inventory_id": 282,
        "resourceId": "2",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            11215,
            12277
        ],
        "inventory_id": 283,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            11575,
            12030
        ],
        "inventory_id": 290,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            11770,
            12078
        ],
        "inventory_id": 294,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            11184,
            12205
        ],
        "inventory_id": 298,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            11274,
            12174
        ],
        "inventory_id": 302,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            11622,
            11939
        ],
        "inventory_id": 306,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            11527,
            12272
        ],
        "inventory_id": 310,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            11440,
            11940
        ],
        "inventory_id": 314,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            11434,
            11963
        ],
        "inventory_id": 318,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            11734,
            11960
        ],
        "inventory_id": 322,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            11248,
            12188
        ],
        "inventory_id": 326,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            11381,
            12128
        ],
        "inventory_id": 329,
        "resourceId": "3",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            11524,
            11977
        ],
        "inventory_id": 330,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            11426,
            11891
        ],
        "inventory_id": 337,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            11799,
            11961
        ],
        "inventory_id": 341,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            11280,
            12013
        ],
        "inventory_id": 345,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            11400,
            12034
        ],
        "inventory_id": 349,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            11644,
            11987
        ],
        "inventory_id": 353,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            11783,
            12223
        ],
        "inventory_id": 357,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            11124,
            12219
        ],
        "inventory_id": 361,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            11433,
            11852
        ],
        "inventory_id": 365,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            11608,
            12064
        ],
        "inventory_id": 369,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            11700,
            12219
        ],
        "inventory_id": 373,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            11764,
            12224
        ],
        "inventory_id": 376,
        "resourceId": "3",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            11179,
            12187
        ],
        "inventory_id": 377,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            11137,
            12214
        ],
        "inventory_id": 384,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            11456,
            12319
        ],
        "inventory_id": 388,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            11515,
            12021
        ],
        "inventory_id": 392,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            11513,
            12227
        ],
        "inventory_id": 396,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            11643,
            11936
        ],
        "inventory_id": 400,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            11220,
            12295
        ],
        "inventory_id": 404,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            11511,
            11847
        ],
        "inventory_id": 408,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            11306,
            12303
        ],
        "inventory_id": 412,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            11259,
            11957
        ],
        "inventory_id": 416,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            11501,
            11990
        ],
        "inventory_id": 420,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            11767,
            11951
        ],
        "inventory_id": 423,
        "resourceId": "3",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            10307,
            11272,
            11785
        ],
        "inventory_id": 424,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            10673,
            11324,
            11779
        ],
        "inventory_id": 431,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            10447,
            11309,
            11865
        ],
        "inventory_id": 435,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            10711,
            11345,
            11979
        ],
        "inventory_id": 439,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            10517,
            11247,
            11950
        ],
        "inventory_id": 443,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            10983,
            11156,
            11854
        ],
        "inventory_id": 447,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            10431,
            11082,
            11576
        ],
        "inventory_id": 451,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            10656,
            11070,
            11682
        ],
        "inventory_id": 455,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            10994,
            11155,
            11927
        ],
        "inventory_id": 459,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            10399,
            11499,
            11702
        ],
        "inventory_id": 463,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            10996,
            11363,
            11928
        ],
        "inventory_id": 467,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            10717,
            11424,
            11506
        ],
        "inventory_id": 470,
        "resourceId": "4",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            10812,
            11043,
            11634
        ],
        "inventory_id": 471,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            10331,
            11321,
            11853
        ],
        "inventory_id": 478,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            10511,
            11040,
            11552
        ],
        "inventory_id": 482,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            10552,
            11279,
            11954
        ],
        "inventory_id": 486,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            10773,
            11401,
            11642
        ],
        "inventory_id": 490,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            10464,
            11311,
            11925
        ],
        "inventory_id": 494,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            10324,
            11002,
            11817
        ],
        "inventory_id": 498,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            10862,
            11149,
            11836
        ],
        "inventory_id": 502,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            10904,
            11272,
            11745
        ],
        "inventory_id": 506,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            10569,
            11171,
            11706
        ],
        "inventory_id": 510,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            10608,
            11135,
            11645
        ],
        "inventory_id": 514,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            10300,
            11181,
            11850
        ],
        "inventory_id": 517,
        "resourceId": "4",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            10803,
            11259,
            11697
        ],
        "inventory_id": 518,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            10305,
            11153,
            11599
        ],
        "inventory_id": 525,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            10859,
            11204,
            11960
        ],
        "inventory_id": 529,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            10606,
            11137,
            11794
        ],
        "inventory_id": 533,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            10737,
            11037,
            11803
        ],
        "inventory_id": 537,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            10863,
            11373,
            11873
        ],
        "inventory_id": 541,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            10931,
            11013,
            11543
        ],
        "inventory_id": 545,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            10334,
            11102,
            11978
        ],
        "inventory_id": 549,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            10607,
            11308,
            11766
        ],
        "inventory_id": 553,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            10874,
            11258,
            11810
        ],
        "inventory_id": 557,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            10657,
            11244,
            11823
        ],
        "inventory_id": 561,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            10498,
            11281,
            11597
        ],
        "inventory_id": 564,
        "resourceId": "4",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            9483,
            10028
        ],
        "inventory_id": 565,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            9318,
            10153
        ],
        "inventory_id": 572,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            9411,
            9890
        ],
        "inventory_id": 576,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            9374,
            9885
        ],
        "inventory_id": 580,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            9339,
            9996
        ],
        "inventory_id": 584,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            9190,
            10004
        ],
        "inventory_id": 588,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            9028,
            10070
        ],
        "inventory_id": 592,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            9154,
            9863
        ],
        "inventory_id": 596,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            9107,
            10106
        ],
        "inventory_id": 600,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            9076,
            10017
        ],
        "inventory_id": 604,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            9116,
            10032
        ],
        "inventory_id": 608,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            9422,
            9864
        ],
        "inventory_id": 611,
        "resourceId": "5",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            9006,
            9719
        ],
        "inventory_id": 612,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            9560,
            9913
        ],
        "inventory_id": 619,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            9494,
            10197
        ],
        "inventory_id": 623,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            9101,
            9907
        ],
        "inventory_id": 627,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            9289,
            9958
        ],
        "inventory_id": 631,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            9408,
            9709
        ],
        "inventory_id": 635,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            9071,
            9711
        ],
        "inventory_id": 639,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            9683,
            9785
        ],
        "inventory_id": 643,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            9148,
            10071
        ],
        "inventory_id": 647,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            9647,
            10029
        ],
        "inventory_id": 651,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            9384,
            9954
        ],
        "inventory_id": 655,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            9509,
            10074
        ],
        "inventory_id": 658,
        "resourceId": "5",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            9498,
            9955
        ],
        "inventory_id": 659,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            9299,
            9808
        ],
        "inventory_id": 666,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            9318,
            10156
        ],
        "inventory_id": 670,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            9267,
            9705
        ],
        "inventory_id": 674,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            9244,
            9844
        ],
        "inventory_id": 678,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            9139,
            9714
        ],
        "inventory_id": 682,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            9531,
            10012
        ],
        "inventory_id": 686,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            9061,
            9732
        ],
        "inventory_id": 690,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            9244,
            9858
        ],
        "inventory_id": 694,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            9118,
            10114
        ],
        "inventory_id": 698,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            9566,
            10152
        ],
        "inventory_id": 702,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            9153,
            9897
        ],
        "inventory_id": 705,
        "resourceId": "5",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            9330
        ],
        "inventory_id": 706,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            9283
        ],
        "inventory_id": 713,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            9545
        ],
        "inventory_id": 717,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            9076
        ],
        "inventory_id": 721,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            9403
        ],
        "inventory_id": 725,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            9320
        ],
        "inventory_id": 729,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            9695
        ],
        "inventory_id": 733,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            9583
        ],
        "inventory_id": 737,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            9092
        ],
        "inventory_id": 741,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            9349
        ],
        "inventory_id": 745,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            9209
        ],
        "inventory_id": 749,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            9375
        ],
        "inventory_id": 752,
        "resourceId": "6",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            9646
        ],
        "inventory_id": 753,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            9007
        ],
        "inventory_id": 760,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            9393
        ],
        "inventory_id": 764,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            9275
        ],
        "inventory_id": 768,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            9177
        ],
        "inventory_id": 772,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            9304
        ],
        "inventory_id": 776,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            9690
        ],
        "inventory_id": 780,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            9669
        ],
        "inventory_id": 784,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            9439
        ],
        "inventory_id": 788,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            9110
        ],
        "inventory_id": 792,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            9143
        ],
        "inventory_id": 796,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            9013
        ],
        "inventory_id": 799,
        "resourceId": "6",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            9639
        ],
        "inventory_id": 800,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            9368
        ],
        "inventory_id": 807,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            9344
        ],
        "inventory_id": 811,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            9047
        ],
        "inventory_id": 815,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            9045
        ],
        "inventory_id": 819,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            9242
        ],
        "inventory_id": 823,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            9131
        ],
        "inventory_id": 827,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            9128
        ],
        "inventory_id": 831,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            9257
        ],
        "inventory_id": 835,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            9221
        ],
        "inventory_id": 839,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            9007
        ],
        "inventory_id": 843,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            9083
        ],
        "inventory_id": 846,
        "resourceId": "6",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            6747,
            7195
        ],
        "inventory_id": 847,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            6483,
            7224
        ],
        "inventory_id": 854,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            6583,
            7220
        ],
        "inventory_id": 858,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            6422,
            7327
        ],
        "inventory_id": 862,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            6991,
            7451
        ],
        "inventory_id": 866,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            6510,
            7177
        ],
        "inventory_id": 870,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            6584,
            7052
        ],
        "inventory_id": 874,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            6567,
            7197
        ],
        "inventory_id": 878,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            6525,
            7084
        ],
        "inventory_id": 882,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            6718,
            7335
        ],
        "inventory_id": 886,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            6312,
            7105
        ],
        "inventory_id": 890,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            6881,
            7404
        ],
        "inventory_id": 893,
        "resourceId": "7",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            6484,
            7018
        ],
        "inventory_id": 894,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            6657,
            7423
        ],
        "inventory_id": 901,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            6324,
            7187
        ],
        "inventory_id": 905,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            6490,
            7122
        ],
        "inventory_id": 909,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            6789,
            7365
        ],
        "inventory_id": 913,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            6757,
            7321
        ],
        "inventory_id": 917,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            6393,
            7458
        ],
        "inventory_id": 921,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            6699,
            7025
        ],
        "inventory_id": 925,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            6660,
            7344
        ],
        "inventory_id": 929,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            6440,
            7233
        ],
        "inventory_id": 933,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            6709,
            7438
        ],
        "inventory_id": 937,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            6943,
            7233
        ],
        "inventory_id": 940,
        "resourceId": "7",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            6681,
            7283
        ],
        "inventory_id": 941,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            6977,
            7108
        ],
        "inventory_id": 948,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            6798,
            7459
        ],
        "inventory_id": 952,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            6827,
            7277
        ],
        "inventory_id": 956,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            6374,
            7406
        ],
        "inventory_id": 960,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            6302,
            7000
        ],
        "inventory_id": 964,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            6477,
            7325
        ],
        "inventory_id": 968,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            6525,
            7215
        ],
        "inventory_id": 972,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            6612,
            7185
        ],
        "inventory_id": 976,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            6791,
            7143
        ],
        "inventory_id": 980,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            6576,
            7198
        ],
        "inventory_id": 984,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            6973,
            7110
        ],
        "inventory_id": 987,
        "resourceId": "7",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            10290,
            10430
        ],
        "inventory_id": 988,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            10073,
            10571
        ],
        "inventory_id": 995,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            9708,
            10458
        ],
        "inventory_id": 999,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            10101,
            10841
        ],
        "inventory_id": 1003,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            10168,
            10517
        ],
        "inventory_id": 1007,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            10269,
            10799
        ],
        "inventory_id": 1011,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            10112,
            10437
        ],
        "inventory_id": 1015,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            10093,
            10488
        ],
        "inventory_id": 1019,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            10259,
            10601
        ],
        "inventory_id": 1023,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            10108,
            10622
        ],
        "inventory_id": 1027,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            9857,
            10392
        ],
        "inventory_id": 1031,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            9715,
            10401
        ],
        "inventory_id": 1034,
        "resourceId": "8",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            10108,
            10706
        ],
        "inventory_id": 1035,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            9740,
            10689
        ],
        "inventory_id": 1042,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            10023,
            10587
        ],
        "inventory_id": 1046,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            9941,
            10783
        ],
        "inventory_id": 1050,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            10039,
            10502
        ],
        "inventory_id": 1054,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            9830,
            10527
        ],
        "inventory_id": 1058,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            10293,
            10724
        ],
        "inventory_id": 1062,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            9700,
            10677
        ],
        "inventory_id": 1066,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            10381,
            10780
        ],
        "inventory_id": 1070,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            10182,
            10533
        ],
        "inventory_id": 1074,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            10072,
            10631
        ],
        "inventory_id": 1078,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            9981,
            10782
        ],
        "inventory_id": 1081,
        "resourceId": "8",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            10050,
            10633
        ],
        "inventory_id": 1082,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            10325,
            10484
        ],
        "inventory_id": 1089,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            9809,
            10826
        ],
        "inventory_id": 1093,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            9746,
            10488
        ],
        "inventory_id": 1097,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            9884,
            10692
        ],
        "inventory_id": 1101,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            9934,
            10467
        ],
        "inventory_id": 1105,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            10161,
            10889
        ],
        "inventory_id": 1109,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            9954,
            10513
        ],
        "inventory_id": 1113,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            9903,
            10725
        ],
        "inventory_id": 1117,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            9828,
            10537
        ],
        "inventory_id": 1121,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            9840,
            10853
        ],
        "inventory_id": 1125,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            10207,
            10584
        ],
        "inventory_id": 1128,
        "resourceId": "8",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            5159,
            5344
        ],
        "inventory_id": 1129,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            4853,
            5413
        ],
        "inventory_id": 1136,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            5202,
            5523
        ],
        "inventory_id": 1140,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            5107,
            5281
        ],
        "inventory_id": 1144,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            5201,
            5758
        ],
        "inventory_id": 1148,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            5083,
            5724
        ],
        "inventory_id": 1152,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            4668,
            5442
        ],
        "inventory_id": 1156,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            5028,
            5417
        ],
        "inventory_id": 1160,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            4948,
            5519
        ],
        "inventory_id": 1164,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            4904,
            5281
        ],
        "inventory_id": 1168,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            4746,
            5414
        ],
        "inventory_id": 1172,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            5041,
            5339
        ],
        "inventory_id": 1175,
        "resourceId": "9",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            4651,
            5540
        ],
        "inventory_id": 1176,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            4893,
            5297
        ],
        "inventory_id": 1183,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            4871,
            5544
        ],
        "inventory_id": 1187,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            4739,
            5614
        ],
        "inventory_id": 1191,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            4797,
            5580
        ],
        "inventory_id": 1195,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            4883,
            5611
        ],
        "inventory_id": 1199,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            4682,
            5272
        ],
        "inventory_id": 1203,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            5019,
            5284
        ],
        "inventory_id": 1207,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            5131,
            5481
        ],
        "inventory_id": 1211,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            5162,
            5573
        ],
        "inventory_id": 1215,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            5250,
            5570
        ],
        "inventory_id": 1219,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            4881,
            5326
        ],
        "inventory_id": 1222,
        "resourceId": "9",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            5248,
            5541
        ],
        "inventory_id": 1223,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            5225,
            5284
        ],
        "inventory_id": 1230,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            4972,
            5689
        ],
        "inventory_id": 1234,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            4629,
            5585
        ],
        "inventory_id": 1238,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            4815,
            5584
        ],
        "inventory_id": 1242,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            4978,
            5427
        ],
        "inventory_id": 1246,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            4919,
            5444
        ],
        "inventory_id": 1250,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            5044,
            5620
        ],
        "inventory_id": 1254,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            4561,
            5705
        ],
        "inventory_id": 1258,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            4649,
            5337
        ],
        "inventory_id": 1262,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            5183,
            5711
        ],
        "inventory_id": 1266,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            4948,
            5706
        ],
        "inventory_id": 1269,
        "resourceId": "9",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            15813,
            16330
        ],
        "inventory_id": 1270,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            15756,
            16216
        ],
        "inventory_id": 1277,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            15678,
            16333
        ],
        "inventory_id": 1281,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            15835,
            16410
        ],
        "inventory_id": 1285,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            15749,
            15972
        ],
        "inventory_id": 1289,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            15683,
            15956
        ],
        "inventory_id": 1293,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            15441,
            16293
        ],
        "inventory_id": 1297,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            15635,
            16137
        ],
        "inventory_id": 1301,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            15890,
            16379
        ],
        "inventory_id": 1305,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            15295,
            16105
        ],
        "inventory_id": 1309,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            15265,
            16378
        ],
        "inventory_id": 1313,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            15899,
            16253
        ],
        "inventory_id": 1316,
        "resourceId": "10",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            15425,
            16078
        ],
        "inventory_id": 1317,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            15316,
            16379
        ],
        "inventory_id": 1324,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            15754,
            16421
        ],
        "inventory_id": 1328,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            15817,
            16155
        ],
        "inventory_id": 1332,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            15623,
            16044
        ],
        "inventory_id": 1336,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            15744,
            16429
        ],
        "inventory_id": 1340,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            15428,
            16279
        ],
        "inventory_id": 1344,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            15748,
            16205
        ],
        "inventory_id": 1348,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            15776,
            16262
        ],
        "inventory_id": 1352,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            15482,
            16149
        ],
        "inventory_id": 1356,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            15485,
            16021
        ],
        "inventory_id": 1360,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            15392,
            16413
        ],
        "inventory_id": 1363,
        "resourceId": "10",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            15405,
            16346
        ],
        "inventory_id": 1364,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            15463,
            16281
        ],
        "inventory_id": 1371,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            15625,
            16428
        ],
        "inventory_id": 1375,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            15411,
            16183
        ],
        "inventory_id": 1379,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            15819,
            16235
        ],
        "inventory_id": 1383,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            15737,
            16001
        ],
        "inventory_id": 1387,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            15849,
            16067
        ],
        "inventory_id": 1391,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            15849,
            16148
        ],
        "inventory_id": 1395,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            15787,
            16101
        ],
        "inventory_id": 1399,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            15622,
            16400
        ],
        "inventory_id": 1403,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            15323,
            16074
        ],
        "inventory_id": 1407,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            15634,
            16341
        ],
        "inventory_id": 1410,
        "resourceId": "10",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            34815,
            35465
        ],
        "inventory_id": 1411,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            34430,
            35491
        ],
        "inventory_id": 1418,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            34705,
            35488
        ],
        "inventory_id": 1422,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            34746,
            35403
        ],
        "inventory_id": 1426,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            34849,
            35478
        ],
        "inventory_id": 1430,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            34551,
            35323
        ],
        "inventory_id": 1434,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            35000,
            35236
        ],
        "inventory_id": 1438,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            34379,
            35163
        ],
        "inventory_id": 1442,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            34846,
            35560
        ],
        "inventory_id": 1446,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            34975,
            35130
        ],
        "inventory_id": 1450,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            34818,
            35261
        ],
        "inventory_id": 1454,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            34526,
            35498
        ],
        "inventory_id": 1457,
        "resourceId": "11",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            34543,
            35194
        ],
        "inventory_id": 1458,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            34463,
            35250
        ],
        "inventory_id": 1465,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            34415,
            35212
        ],
        "inventory_id": 1469,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            34718,
            35327
        ],
        "inventory_id": 1473,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            34626,
            35165
        ],
        "inventory_id": 1477,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            34732,
            35282
        ],
        "inventory_id": 1481,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            35015,
            35530
        ],
        "inventory_id": 1485,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            35069,
            35358
        ],
        "inventory_id": 1489,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            34835,
            35441
        ],
        "inventory_id": 1493,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            34627,
            35163
        ],
        "inventory_id": 1497,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            34868,
            35145
        ],
        "inventory_id": 1501,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            34563,
            35569
        ],
        "inventory_id": 1504,
        "resourceId": "11",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            34878,
            35171
        ],
        "inventory_id": 1505,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            35063,
            35354
        ],
        "inventory_id": 1512,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            34805,
            35386
        ],
        "inventory_id": 1516,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            34613,
            35125
        ],
        "inventory_id": 1520,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            34653,
            35140
        ],
        "inventory_id": 1524,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            34972,
            35449
        ],
        "inventory_id": 1528,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            34658,
            35175
        ],
        "inventory_id": 1532,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            34998,
            35177
        ],
        "inventory_id": 1536,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            34947,
            35519
        ],
        "inventory_id": 1540,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            34504,
            35111
        ],
        "inventory_id": 1544,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            35005,
            35323
        ],
        "inventory_id": 1548,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            34805,
            35137
        ],
        "inventory_id": 1551,
        "resourceId": "11",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            45478,
            46373
        ],
        "inventory_id": 1552,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            45776,
            46050
        ],
        "inventory_id": 1559,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            45583,
            45996
        ],
        "inventory_id": 1563,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            45875,
            46389
        ],
        "inventory_id": 1567,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            45546,
            46208
        ],
        "inventory_id": 1571,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            45304,
            45986
        ],
        "inventory_id": 1575,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            45363,
            46371
        ],
        "inventory_id": 1579,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            45228,
            46119
        ],
        "inventory_id": 1583,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            45276,
            45914
        ],
        "inventory_id": 1587,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            45723,
            46360
        ],
        "inventory_id": 1591,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            45516,
            46330
        ],
        "inventory_id": 1595,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            45858,
            46269
        ],
        "inventory_id": 1598,
        "resourceId": "12",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            45725,
            46231
        ],
        "inventory_id": 1599,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            45444,
            46020
        ],
        "inventory_id": 1606,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            45431,
            45979
        ],
        "inventory_id": 1610,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            45601,
            45972
        ],
        "inventory_id": 1614,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            45207,
            46167
        ],
        "inventory_id": 1618,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            45855,
            46208
        ],
        "inventory_id": 1622,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            45319,
            46146
        ],
        "inventory_id": 1626,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            45885,
            46234
        ],
        "inventory_id": 1630,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            45772,
            46253
        ],
        "inventory_id": 1634,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            45773,
            46148
        ],
        "inventory_id": 1638,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            45883,
            46060
        ],
        "inventory_id": 1642,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            45511,
            46367
        ],
        "inventory_id": 1645,
        "resourceId": "12",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            45830,
            45906
        ],
        "inventory_id": 1646,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            45267,
            46144
        ],
        "inventory_id": 1653,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            45457,
            45957
        ],
        "inventory_id": 1657,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            45456,
            46358
        ],
        "inventory_id": 1661,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            45238,
            45947
        ],
        "inventory_id": 1665,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            45463,
            46086
        ],
        "inventory_id": 1669,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            45395,
            46366
        ],
        "inventory_id": 1673,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            45730,
            45979
        ],
        "inventory_id": 1677,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            45414,
            46155
        ],
        "inventory_id": 1681,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            45513,
            46297
        ],
        "inventory_id": 1685,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            45411,
            46275
        ],
        "inventory_id": 1689,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            45447,
            46140
        ],
        "inventory_id": 1692,
        "resourceId": "12",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            76090,
            76460
        ],
        "inventory_id": 1693,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            75581,
            76441
        ],
        "inventory_id": 1700,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            75696,
            76487
        ],
        "inventory_id": 1704,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            75539,
            76408
        ],
        "inventory_id": 1708,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            75845,
            76453
        ],
        "inventory_id": 1712,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            76090,
            76419
        ],
        "inventory_id": 1716,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            75711,
            76425
        ],
        "inventory_id": 1720,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            75549,
            76554
        ],
        "inventory_id": 1724,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            75586,
            76315
        ],
        "inventory_id": 1728,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            75701,
            76289
        ],
        "inventory_id": 1732,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            76103,
            76160
        ],
        "inventory_id": 1736,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            75722,
            76339
        ],
        "inventory_id": 1739,
        "resourceId": "13",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            75458,
            76450
        ],
        "inventory_id": 1740,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            75413,
            76332
        ],
        "inventory_id": 1747,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            75976,
            76551
        ],
        "inventory_id": 1751,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            75804,
            76494
        ],
        "inventory_id": 1755,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            75746,
            76179
        ],
        "inventory_id": 1759,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            75724,
            76248
        ],
        "inventory_id": 1763,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            75866,
            76551
        ],
        "inventory_id": 1767,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            75669,
            76261
        ],
        "inventory_id": 1771,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            75509,
            76145
        ],
        "inventory_id": 1775,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            75604,
            76209
        ],
        "inventory_id": 1779,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            75722,
            76134
        ],
        "inventory_id": 1783,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            75550,
            76308
        ],
        "inventory_id": 1786,
        "resourceId": "13",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            75448,
            76586
        ],
        "inventory_id": 1787,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            75656,
            76399
        ],
        "inventory_id": 1794,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            75516,
            76138
        ],
        "inventory_id": 1798,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            76030,
            76265
        ],
        "inventory_id": 1802,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            75775,
            76284
        ],
        "inventory_id": 1806,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            75660,
            76375
        ],
        "inventory_id": 1810,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            75655,
            76302
        ],
        "inventory_id": 1814,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            75753,
            76232
        ],
        "inventory_id": 1818,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            75822,
            76386
        ],
        "inventory_id": 1822,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            75455,
            76584
        ],
        "inventory_id": 1826,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            75665,
            76230
        ],
        "inventory_id": 1830,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            75411,
            76138
        ],
        "inventory_id": 1833,
        "resourceId": "13",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            3503
        ],
        "inventory_id": 1834,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            3888
        ],
        "inventory_id": 1841,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            3771
        ],
        "inventory_id": 1845,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            3683
        ],
        "inventory_id": 1849,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            3458
        ],
        "inventory_id": 1853,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            3852
        ],
        "inventory_id": 1857,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            3879
        ],
        "inventory_id": 1861,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            3871
        ],
        "inventory_id": 1865,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            3640
        ],
        "inventory_id": 1869,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            3397
        ],
        "inventory_id": 1873,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            3849
        ],
        "inventory_id": 1877,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            3845
        ],
        "inventory_id": 1880,
        "resourceId": "14",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            4063
        ],
        "inventory_id": 1881,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            4010
        ],
        "inventory_id": 1888,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            3870
        ],
        "inventory_id": 1892,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            3851
        ],
        "inventory_id": 1896,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            3446
        ],
        "inventory_id": 1900,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            3414
        ],
        "inventory_id": 1904,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            4031
        ],
        "inventory_id": 1908,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            3486
        ],
        "inventory_id": 1912,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            3446
        ],
        "inventory_id": 1916,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            3605
        ],
        "inventory_id": 1920,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            3899
        ],
        "inventory_id": 1924,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            3915
        ],
        "inventory_id": 1927,
        "resourceId": "14",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            3510
        ],
        "inventory_id": 1928,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            3507
        ],
        "inventory_id": 1935,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            3471
        ],
        "inventory_id": 1939,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            3575
        ],
        "inventory_id": 1943,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            3373
        ],
        "inventory_id": 1947,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            3549
        ],
        "inventory_id": 1951,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            4069
        ],
        "inventory_id": 1955,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            4050
        ],
        "inventory_id": 1959,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            3708
        ],
        "inventory_id": 1963,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            3902
        ],
        "inventory_id": 1967,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            3784
        ],
        "inventory_id": 1971,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            3826
        ],
        "inventory_id": 1974,
        "resourceId": "14",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            8820
        ],
        "inventory_id": 1975,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            9103
        ],
        "inventory_id": 1982,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            9040
        ],
        "inventory_id": 1986,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            8737
        ],
        "inventory_id": 1990,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            8634
        ],
        "inventory_id": 1994,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            9159
        ],
        "inventory_id": 1998,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            8954
        ],
        "inventory_id": 2002,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            8606
        ],
        "inventory_id": 2006,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            9284
        ],
        "inventory_id": 2010,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            9033
        ],
        "inventory_id": 2014,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            8738
        ],
        "inventory_id": 2018,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            8636
        ],
        "inventory_id": 2021,
        "resourceId": "15",
        "rate_plan_id": 1,
        "rate_plan_name": "Standard Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            8636
        ],
        "inventory_id": 2022,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            9127
        ],
        "inventory_id": 2029,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            8636
        ],
        "inventory_id": 2033,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            8892
        ],
        "inventory_id": 2037,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            8713
        ],
        "inventory_id": 2041,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            8653
        ],
        "inventory_id": 2045,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            8991
        ],
        "inventory_id": 2049,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            9073
        ],
        "inventory_id": 2053,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            8593
        ],
        "inventory_id": 2057,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            8934
        ],
        "inventory_id": 2061,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            9079
        ],
        "inventory_id": 2065,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            8866
        ],
        "inventory_id": 2068,
        "resourceId": "15",
        "rate_plan_id": 2,
        "rate_plan_name": "Non-Refundable Rate",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240720,
        "start": "2024-08-30",
        "end": "2024-07-20"
    },
    {
        "prices": [
            9042
        ],
        "inventory_id": 2069,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240720,
        "date_to_id": 20240721,
        "start": "2024-07-20",
        "end": "2024-07-21"
    },
    {
        "prices": [
            8615
        ],
        "inventory_id": 2076,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240721,
        "date_to_id": 20240725,
        "start": "2024-07-21",
        "end": "2024-07-25"
    },
    {
        "prices": [
            8854
        ],
        "inventory_id": 2080,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240725,
        "date_to_id": 20240729,
        "start": "2024-07-25",
        "end": "2024-07-29"
    },
    {
        "prices": [
            9075
        ],
        "inventory_id": 2084,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240729,
        "date_to_id": 20240802,
        "start": "2024-07-29",
        "end": "2024-08-02"
    },
    {
        "prices": [
            8742
        ],
        "inventory_id": 2088,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240802,
        "date_to_id": 20240806,
        "start": "2024-08-02",
        "end": "2024-08-06"
    },
    {
        "prices": [
            8800
        ],
        "inventory_id": 2092,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240806,
        "date_to_id": 20240810,
        "start": "2024-08-06",
        "end": "2024-08-10"
    },
    {
        "prices": [
            8787
        ],
        "inventory_id": 2096,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240810,
        "date_to_id": 20240814,
        "start": "2024-08-10",
        "end": "2024-08-14"
    },
    {
        "prices": [
            8699
        ],
        "inventory_id": 2100,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240814,
        "date_to_id": 20240818,
        "start": "2024-08-14",
        "end": "2024-08-18"
    },
    {
        "prices": [
            9192
        ],
        "inventory_id": 2104,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240818,
        "date_to_id": 20240822,
        "start": "2024-08-18",
        "end": "2024-08-22"
    },
    {
        "prices": [
            9116
        ],
        "inventory_id": 2108,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240822,
        "date_to_id": 20240826,
        "start": "2024-08-22",
        "end": "2024-08-26"
    },
    {
        "prices": [
            8664
        ],
        "inventory_id": 2112,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240826,
        "date_to_id": 20240830,
        "start": "2024-08-26",
        "end": "2024-08-30"
    },
    {
        "prices": [
            8637
        ],
        "inventory_id": 2115,
        "resourceId": "15",
        "rate_plan_id": 8,
        "rate_plan_name": "Weekly",
        "color": "",
        "is_checkout_disabled": false,
        "is_checkin_disabled": false,
        "date_from_id": 20240830,
        "date_to_id": 20240901,
        "start": "2024-08-30",
        "end": "2024-09-01"
    }
]