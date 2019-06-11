import * as Rx from 'rxjs'
import * as RxOps from 'rxjs/operators'

export type Incident = {
  id: number
  title: string
  description: string
  address: string
  occurred_at: number
  updated_at: number
  url: string
  source: {
    name: string
    html_url: string
    api_url: string
  }
  media: {
    image_url: string | null
    image_url_thumb: string | null
  }
  location_type: string | null
  location_description: string | null
  type: string | null
  type_properties: string | null
}

export function incidentsList(params: object = {}): Rx.Observable<Incident[]> {
  return Rx.of([
    {
      id: 101291,
      title: 'Stolen 2013 KHS Bicycles Manhattan(green)',
      description: 'Locked on the metal fence next to brieux carre to see the pride parade. ',
      address: 'New Orleans, LA, 70116',
      occurred_at: 1560117600,
      updated_at: 1560177927,
      url: 'https://bikewise.org/api/v1/incidents/101291',
      source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/618321',
        api_url: 'https://bikeindex.org/api/v1/bikes/618321',
      },
      media: {
        image_url: 'https://files.bikeindex.org/uploads/Pu/161808/large_20190408_161253.jpg',
        image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/161808/small_20190408_161253.jpg',
      },
      location_type: null,
      location_description: null,
      type: 'Theft',
      type_properties: null,
    },
    {
      id: 101337,
      title: 'Bicycles: Racks, Bike Share, Lanes, Other',
      description:
        'Garrison Ave was recently repaved. Will the bike lane be restriped as well? I bike ride on this road every day while taking my kids to school',
      address: '129 Garrison Ave ',
      occurred_at: 1560211598,
      updated_at: 1560244763,
      url: 'https://bikewise.org/api/v1/incidents/101337',
      source: {
        name: 'SeeClickFix.com',
        html_url: 'https://seeclickfix.com/issues/6003734',
        api_url: 'https://seeclickfix.com/api/v2/issues/6003734',
      },
      media: {
        image_url: null,
        image_url_thumb: null,
      },
      location_type: null,
      location_description: null,
      type: 'Unconfirmed',
      type_properties: null,
    },
    {
      id: 101334,
      title: 'Pave My Road',
      description:
        'Beginning from N Saranac Dr and Pontatoc Rd to N Osage Dr and Pontatoc Rd.\nDescription of Request: Asphalt maintenance Description of Problem:\nThe current road is unpaved and in bad condition. We are requesting a project for this segment of the road to be paved.\n\nThe current condition of the road is poor, vulnerable to erosion, and not conducive for children to ride their bikes. In addition, the unpaved roads are bad for tires (increased wear/tear) and harmful to health (increased susceptibility to valley fever, respiratory problems, and skin irritation).',
      address: '4201-4599 N Osage Dr Tucson, AZ, 85718, USA',
      occurred_at: 1560208020,
      updated_at: 1560244531,
      url: 'https://bikewise.org/api/v1/incidents/101334',
      source: {
        name: 'SeeClickFix.com',
        html_url: 'https://seeclickfix.com/issues/6003566',
        api_url: 'https://seeclickfix.com/api/v2/issues/6003566',
      },
      media: {
        image_url: null,
        image_url_thumb: null,
      },
      location_type: null,
      location_description: null,
      type: 'Unconfirmed',
      type_properties: null,
    },
  ]).pipe(RxOps.delay(1000))
}
