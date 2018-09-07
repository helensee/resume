module.exports = {
  name: 'Mike Sayan',
  contact: [
    'New York, NY',
    '555-555-5555',
    'me@gmail.com'
  ],
  technical: {
    languages: [
      'Java', 'Scala', 'Python', 'PostgreSQL'
    ],
    frameworks: [
      'Spark', 'Hadoop', 'Spring MVC & Boot', 'AspectJ', 'Jackson', 'Hibernate', 'QueryDSL', 'Hystrix', 'gRPC'
    ],
    tools: [
      'Docker', 'Redis', 'Consul', 'Jetty', 'Nginx', 'Git', 'Akamai', 'Jenkins', 'Maven', 'Sbt'
    ],
    aws: [
      'CloudFormation', 'EC2', 'ECS', 'EMR', 'Lambda', 'S3', 'RDS'
    ]
  },
  experience: [
    {
      org: 'Viacom Personalization',
      dates: 'Jan 2017 – Current',
      role: 'Software Engineer',
      accomplishments: [
        'Building a scalable automated data pipeline, with monitoring tools, to batch process user data',
        'Utilizing machine learning algorithms such as ALS for collaborative filtering using Apache Spark',
        'Researching and designing an algorithm to rank content by popularity with time decay',
        'Designing databases to query recommendations with region and brand granularity for global apps',
        'Developing containerized microservices for serving results using Spring Boot, Consul, & gRPC',
        'Creating code deployment pipelines for applications which are run in EMR, ECS, or Lambda',
        'Templating AWS infrastructure using CloudFormation to deploy in mutliple accounts',
        'Contribute in prioritizing, scheduling, and constructing solutions to feature requests'
      ]
    }, {
      org: 'Nick Services',
      dates: 'Jan 2016 – Dec 2016',
      role: 'Software Engineer',
      accomplishments: [
        'Worked on Nick API which is used globally by Web, Native Mobile, & OTT apps',
        'Added content management DTOs to API feeds',
        'Implemented timezone support to TV schedule for global sites',
        'Communicated with Noggin teams to rollout new features by utilizing API versioning',
        'Decreased application start-up time 20% by externalizing dependencies',
        'Supported operations team in tracking various bugs and organizing launches of new apps'
      ]
    }
  ],
  education: [
    {
      role: 'Stony Brook University',
      dates: 'Dec 2016',
      accomplishments: [
        'B.S. Computer Science',
        'Dean\'s List (Summer 2014 through Fall 2016)',
        "Major GPA: 3.6"
      ]
    }
  ],
  projects: [
   {
      org: 'ScriptEd',
      dates: 'Sep 2016 – Current',
      role: 'Volunteer Teacher',
      accomplishments: [
        'Taught high school students HTML, CSS, jQuery, and JavaScript'
      ]
    }
  ],
  sectionOrder: ['experience', 'projects', 'education']
}
