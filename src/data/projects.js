export const projects = [
  {
    id: "01",
    title: "FlightFinder",
    tagline: "Full-Stack MERN Flight Booking & Itinerary Platform",
    category: "Web Development",
    description: "A responsive MERN stack flight-booking application featuring real-time flight search, interactive seat selection, booking workflows, and itinerary management with secure user authentication and modern UI.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/assets/flightfinder.jpg",
    githubUrl: "https://github.com/veereshgollapu/FlightFinder",
    demoUrl: null, // Graceful fallback handled in UI
    status: "Completed",
    highlights: [
      "Dynamic flight search query filtering by routes, dates, and cabin class",
      "Interactive SVG-based seat selection layout with real-time reservation locks",
      "RESTful API architecture with MongoDB data models and schema validation"
    ]
  },
  {
    id: "02",
    title: "Smart Home Automation",
    tagline: "Python & ESP32 Distributed Telemetry System",
    category: "IoT & Embedded",
    description: "An integrated smart home automation solution utilizing ESP32 microcontrollers and Python server logic for real-time sensor data acquisition, relay actuation, climate automation, and energy monitoring.",
    technologies: ["Python", "ESP32", "C++", "MQTT", "WebSockets", "React"],
    image: "/assets/smarthome.jpg",
    githubUrl: "https://github.com/veereshgollapu/smart-home-automation",
    demoUrl: null,
    status: "Completed",
    highlights: [
      "Low-latency telemetry streaming over MQTT protocol with ESP32 nodes",
      "Interactive 3D floorplan telemetry dashboard with zone-based environmental controls",
      "Automated threshold triggers for lighting, HVAC, and energy optimization"
    ]
  },
  {
    id: "03",
    title: "IoT Attendance Monitoring System",
    tagline: "Biometric & RFID Hardware-Software Check-in Tracker",
    category: "IoT & Embedded",
    description: "An automated enterprise attendance logging system integrating RFID and biometric sensor hardware with an administrative management dashboard, enabling accurate time-stamped attendance logging and reporting.",
    technologies: ["ESP32", "RFID / Biometric Sensors", "Python", "MySQL", "C"],
    image: "/assets/attendance.jpg",
    githubUrl: "https://github.com/veereshgollapu/iot-attendance-system",
    demoUrl: null,
    status: "Completed",
    highlights: [
      "Real-time RFID card detection and hardware verification loop",
      "Centralized relational database schema in MySQL for structured audit trails",
      "Live analytics view tracking department check-ins and device status"
    ]
  },
  {
    id: "04",
    title: "IoT Mental Wellness & Fitness Monitor",
    tagline: "Biometric Sensor Telemetry & Stress Analytics",
    category: "IoT & Embedded",
    description: "A connected health and wellness monitoring system collecting real-time physiological indicators (HRV, galvanic skin response, sleep quality) to assess stress patterns and provide actionable health telemetry.",
    technologies: ["Python", "IoT Sensors", "ESP32", "Flask", "React", "Data Analytics"],
    image: "/assets/wellness.jpg",
    githubUrl: "https://github.com/veereshgollapu/iot-wellness-monitoring",
    demoUrl: null,
    status: "Completed",
    highlights: [
      "Continuous physiological sensor acquisition (Heart-rate variability & GSR)",
      "Real-time waveform charting and daily stress level index computation",
      "Holistic wellness overview correlating activity metrics with restorative sleep cycles"
    ]
  }
];
