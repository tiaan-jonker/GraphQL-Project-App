const jobs = [
  {
    id: '1',
    clientId: '1',
    name: 'Death Star Marketing Campaign',
    description:
      'Visual design and copyright for the Death Star marketing campaign',
    status: 'In Progress',
    remuneration: 'Pro-bono',
    urgent: false,
  },
  {
    id: '2',
    clientId: '1',
    name: 'Death Star Website',
    description: 'Setting up and finishing off the Death Star website.',
    status: 'In Progress',
    remuneration: 'Paid',
    urgent: true,
  },
  {
    id: '3',
    clientId: '2',
    name: 'Obi-Wan Personal Website',
    description:
      'Obi-Wan wants a personal website as part of running for senate seat campaign.',
    status: 'In Progress',
    remuneration: 'Paid',
    urgent: false,
  },
  {
    id: '4',
    clientId: '3',
    name: 'Yoda Wise Sayings Website',
    description: 'Yoda wants a website to archive all his wise sayings',
    status: 'In Progress',
    remuneration: 'Paid',
    urgent: false,
  },
  {
    id: '5',
    clientId: '4',
    name: 'Find Father Website',
    description: 'Luke wants a website as part of finding his real father.',
    status: 'Done',
    remuneration: 'Pro-bono',
    urgent: true,
  },
  {
    id: '6',
    clientId: '5',
    name: 'Scraps Website',
    description:
      'Han wants a website to list and sell all the metal and scrap he has gathered.',
    status: 'In Progress',
    remuneration: 'Paid',
    urgent: false,
  },
]

const clients = [
  {
    id: '1',
    name: 'Darth Vader',
    email: 'imyourdaddy@gmail.com',
    phone: '021-639-000',
    address: 'Death Star',
  },
  {
    id: '2',
    name: 'Obi-Wan Kenobi',
    email: 'youwerethechosenone@gmail.com',
    phone: '021-639-001',
    address: 'Stewjon',
  },
  {
    id: '3',
    name: 'Yoda',
    email: 'wiseiam@gmail.com',
    phone: '021-639-002',
    address: 'Dagobah',
  },
  {
    id: '4',
    name: 'Luke Skywalker',
    email: 'iswearnothinghappened@gmail.com',
    phone: '021-639-003',
    address: 'Tatooine',
  },
  {
    id: '5',
    name: 'Han Solo',
    email: 'watchthis@gmail.com',
    phone: '021-639-004',
    address: 'Corellia',
  },
]

module.exports = { jobs, clients }
