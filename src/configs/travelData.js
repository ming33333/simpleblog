const initalData = [
  {
    "city": "Chicago",
    "country": "United States",
    "from": "2022-11",
    "to": "2022-11",
    "latitude": 41.8781,
    "longitude": -87.6298
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "from": "2017-11",
    "to": "2017-12",
    "latitude": 13.7563,
    "longitude": 100.5018
  },
  {
    "city": "Seoul",
    "country": "South Korea",
    "from": "2018-04",
    "to": "2018-06",
    "latitude": 37.5665,
    "longitude": 126.9780
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "from": "2019-10",
    "to": "2019-12",
    "latitude": 1.3521,
    "longitude": 103.8198
  },
  {
    "city": "Dallas",
    "country": "United States",
    "from": "2020-01",
    "to": "2020-02",
    "latitude": 32.7767,
    "longitude": -96.7970
  },
];

const travelData = initalData.sort((a, b) => new Date(a.from) - new Date(b.from));

export default travelData; 