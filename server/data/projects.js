module.exports = [
  {
    slug: "learning-platform",
    title: "Adaptive Learning Platform",
    tagline: "A Python and React learning platform that meets every student at their own level.",
    category: "EdTech",
    type: "Product",
    stack: ["Python", "React", "Database"],
    accent: "#2563eb",
    live: null,
    summary: "Learning platform that adjusts content and practice to each student's performance.",
    overview:
      "An adaptive learning platform where students work through lessons and quizzes, and the system suggests the next content based on their progress. Teachers and admins get progress tracking and reports.",
    features: [
      "Adaptive learning path: the next lesson matches the student's level",
      "Quizzes and practice sets with instant feedback",
      "Student progress and mastery tracking",
      "Teacher dashboard with class and individual performance",
      "Content management for subjects, topics, lessons and questions",
      "Role-based access for Admin, Teacher and Student"
    ],
    modules: [
      { name: "Courses & Content", desc: "Subjects, topics and lessons organised in a clear hierarchy, with text, video and practice questions attached to each lesson." },
      { name: "Quiz Engine", desc: "Quizzes and practice sets drawn from a question bank, with instant marking, explanations and difficulty levels." },
      { name: "Progress Tracking", desc: "Tracks mastery per topic for every student and uses it to decide what they should study next." },
      { name: "Teacher Dashboard", desc: "Class-wide and individual performance views so teachers can spot struggling students early." },
      { name: "Admin Panel", desc: "Manage users, classes, subjects and platform settings from one place." },
      { name: "Reports", desc: "Exportable progress and performance reports for students, classes and the whole institution." }
    ]
  },
  {
    slug: "dotpro-insight",
    title: "DotPro Insight",
    tagline: "A reporting and dashboard SaaS: dashboards and reports from any data source.",
    category: "Analytics SaaS",
    type: "SaaS",
    stack: ["Python", "SaaS", "SQL"],
    accent: "#7c3aed",
    live: "https://dotproanalysis.vercel.app/",
    summary: "SaaS that imports data from Excel, CSV and databases, then cleans, joins and visualizes it.",
    overview:
      "DotPro Insight is a SaaS tool where users import their data (Excel, CSV, SQL or any database), clean and join it, and then build dashboards and reports without writing code.",
    features: [
      "Import from Excel, CSV, SQL and other databases",
      "Data cleaning: duplicates, missing values and formats",
      "Table joins and data transformation",
      "Drag-and-drop dashboards and charts",
      "Saved reports and export",
      "Multi-tenant SaaS accounts"
    ],
    modules: [
      { name: "Data Import", desc: "Upload Excel and CSV files or connect SQL and other databases to bring all your data into one workspace." },
      { name: "Data Cleaning", desc: "Fix duplicates, missing values, wrong formats and inconsistent text with guided cleaning steps." },
      { name: "Joins", desc: "Combine tables from different files or databases with visual joins on matching columns." },
      { name: "Dashboards", desc: "Build dashboards with charts, KPIs and filters using drag and drop, with no code needed." },
      { name: "Reports", desc: "Save report layouts and export them to share with your team." },
      { name: "Workspaces & Users", desc: "Separate workspaces per organisation, with team members, roles and subscription plans." }
    ]
  },
  {
    slug: "school-management",
    title: "School Management System",
    tagline: "From admissions to fees, the whole school ERP in one place.",
    category: "Education",
    type: "ERP",
    stack: ["CodeIgniter 3", "MySQL", "Bootstrap", "jQuery"],
    accent: "#0891b2",
    live: "https://www.musabcollection.com/school_management",
    summary: "A comprehensive school ERP covering students, staff, fees, attendance, exams and roles.",
    overview:
      "A complete ERP for schools that handles daily operations: student records, attendance, fees and payments, exams and reports, all with role-based access.",
    features: [
      "Student admission and records",
      "Attendance and timetable",
      "Fee management and payments",
      "Exams, results and report cards",
      "Role-based panels for Admin, Teacher, Accountant and Parent/Student",
      "Demo data seeder for quick demos"
    ],
    modules: [
      { name: "Admissions", desc: "Capture admission applications, verify documents and convert approved applicants into enrolled students." },
      { name: "Students", desc: "Complete student profiles with guardians, class and section, history and documents." },
      { name: "Staff", desc: "Teacher and staff records, subject allocation and role assignment." },
      { name: "Fees & Payments", desc: "Fee structures, vouchers, online and cash payments, discounts, dues and receipts." },
      { name: "Attendance", desc: "Daily student and staff attendance with absentee tracking and summaries." },
      { name: "Exams & Results", desc: "Exam scheduling, marks entry, grading and printable report cards." },
      { name: "Reports", desc: "Fee, attendance, result and enrollment reports with export." }
    ]
  },
  {
    slug: "inventory-system",
    title: "Enterprise Inventory System",
    tagline: "Multi-tenant inventory with warehouses, locations, GRN, gate pass and transfers.",
    category: "Supply Chain",
    type: "ERP",
    stack: ["CodeIgniter 3", "MySQL", "Bootstrap", "jQuery"],
    accent: "#ea580c",
    live: "https://musabcollection.com/inventory/",
    summary: "Enterprise stock control across warehouses and locations, with tagging and transfers.",
    overview:
      "A multi-tenant inventory management system that tracks stock across multiple warehouses and locations. Item tagging, goods receipt, gate pass, transfers and wastage are all included.",
    features: [
      "Multiple warehouses and storage locations",
      "Item tagging and stock tracking",
      "GRN (Goods Received Note)",
      "Gate pass in and out",
      "Warehouse-to-warehouse transfers",
      "Wastage and adjustment records"
    ],
    modules: [
      { name: "Items & Categories", desc: "Item master with categories, units, tags and reorder levels." },
      { name: "Warehouses & Locations", desc: "Multiple warehouses, each divided into locations such as racks and bins, with stock tracked at every level." },
      { name: "GRN", desc: "Record goods received against purchases with quantity checks and automatic stock updates." },
      { name: "Gate Pass", desc: "Controlled gate-in and gate-out passes for goods entering or leaving the premises." },
      { name: "Transfers", desc: "Move stock between warehouses or locations with a clear sending and receiving trail." },
      { name: "Wastage", desc: "Record damaged, expired or lost items with reasons so stock stays accurate." },
      { name: "Reports", desc: "Stock on hand, movement history, wastage and transfer reports." }
    ]
  },
  {
    slug: "flowhcm-hrms",
    title: "FlowHCM HRMS",
    tagline: "The full HR cycle, from hiring to exit, in one system.",
    category: "Human Resources",
    type: "ERP",
    stack: ["CodeIgniter 3", "MySQL", "Bootstrap", "jQuery"],
    accent: "#16a34a",
    live: null,
    summary: "A complete HRMS covering hiring, onboarding, attendance, payroll, performance, training and exit.",
    overview:
      "FlowHCM (DotPro HRMS) digitizes the whole HR cycle: People (employees, recruitment, onboarding, exit), Time & Pay (attendance, leave, payroll, loans, expense claims), Performance (appraisals, KPIs, training, promotions, discipline) and workspace tools such as assets and administration, all with role-based access.",
    features: [
      "Full employee lifecycle: recruitment, onboarding and exit",
      "Attendance, leave and payroll with loans and expense claims",
      "Appraisals and KPI performance tracking",
      "Training, promotions, discipline and grievance",
      "HR letters and a company asset register",
      "Role-based administration and reports"
    ],
    modules: [
      { group: "People", name: "Employees", desc: "Employee profiles with personal and job details, documents and employment history." },
      { group: "People", name: "Recruitment", desc: "Manage job openings, candidates and hiring stages from application to offer." },
      { group: "People", name: "Onboarding", desc: "Checklists and tasks that take a new hire from offer acceptance to their first day and beyond." },
      { group: "People", name: "Onboarding Requests", desc: "Requests raised for new joiners, such as equipment, accounts and access, tracked until they are completed." },
      { group: "People", name: "Exit Management", desc: "Resignation, clearance and final settlement handled as a structured offboarding process." },
      { group: "Time & Pay", name: "Attendance", desc: "Daily attendance, shifts and late or early tracking." },
      { group: "Time & Pay", name: "Leave", desc: "Leave types, balances, requests and a manager approval workflow." },
      { group: "Time & Pay", name: "Payroll", desc: "Salary structures, allowances and deductions, a monthly payroll run and salary slips." },
      { group: "Time & Pay", name: "Loans & Advances", desc: "Employee loans and salary advances, with approval and repayment tracking." },
      { group: "Time & Pay", name: "Expense Claims", desc: "Employees submit expense claims that go through approval before reimbursement." },
      { group: "Time & Pay", name: "Reports", desc: "HR reports for headcount, attendance, leave, payroll and more, with export." },
      { group: "Performance", name: "Appraisals", desc: "Performance appraisal cycles with employee and manager reviews." },
      { group: "Performance", name: "KPI Performance", desc: "Set KPIs for employees and teams and track performance against them." },
      { group: "Performance", name: "Training", desc: "Plan training programs and record who attended and completed them." },
      { group: "Performance", name: "Discipline & Grievance", desc: "Record disciplinary actions and employee grievances and follow them through to resolution." },
      { group: "Performance", name: "Promotions", desc: "Promotion proposals and approvals, with the change recorded on the employee's profile." },
      { group: "Performance", name: "HR Letters", desc: "Generate standard HR letters from templates." },
      { group: "Workspace", name: "Dashboard", desc: "A single overview of headcount, attendance, pending requests and key HR numbers." },
      { group: "Workspace", name: "Company", desc: "Company profile and basic details used across the system." },
      { group: "Workspace", name: "Assets", desc: "Asset register for company items issued to employees, with assignment and return tracking." },
      { group: "Workspace", name: "Organisation", desc: "Departments, designations, locations and reporting structure." },
      { group: "Workspace", name: "Administration", desc: "Users, roles, permissions and system settings." }
    ]
  },
  {
    slug: "logistics-system",
    title: "LogiPro Logistics System",
    tagline: "National and international shipments in a single system.",
    category: "Logistics",
    type: "ERP",
    stack: ["CodeIgniter 3", "MySQL", "Bootstrap"],
    accent: "#0f766e",
    live: "https://musabcollection.com/logistic/",
    summary: "Logistics management with shipment booking, tracking and an inventory module.",
    overview:
      "LogiPro is built for logistics companies and manages national and international shipments, customers and inventory.",
    features: [
      "National and international shipment booking",
      "Shipment status tracking",
      "Customer and consignee management",
      "Inventory module",
      "Role-based users and branches",
      "Operational and financial reports"
    ],
    modules: [
      { name: "Shipments", desc: "Book national and international shipments with sender, receiver, weight, charges and a tracking number." },
      { name: "Tracking", desc: "Status updates along the route so customers and staff can always see where a shipment is." },
      { name: "Customers", desc: "Customer and consignee records with their shipment and billing history." },
      { name: "Inventory", desc: "Stock handling for goods held within the logistics operation." },
      { name: "Users & Roles", desc: "Branch-level users with role-based access." },
      { name: "Reports", desc: "Shipment, revenue and operational reports." }
    ]
  },
  {
    slug: "restaurant-pos",
    title: "Restaurant Management & POS",
    tagline: "A multi-branch restaurant SaaS: POS, kitchen, delivery and supply chain.",
    category: "Restaurant SaaS",
    type: "SaaS",
    stack: ["Python", "SaaS", "PostgreSQL"],
    accent: "#dc2626",
    live: null,
    summary: "Multi-branch restaurant management and POS with a master branch, on a SaaS base.",
    overview:
      "A SaaS system for restaurants that handles dine-in, takeaway and online delivery orders. A master branch controls all branches, with supply chain and integrations included.",
    features: [
      "Restaurant POS for dine-in, takeaway and delivery",
      "Multi-branch setup with master branch control",
      "Menu, recipes and kitchen flow",
      "Supply chain and stock",
      "Online delivery management",
      "Subscription-based SaaS tenants"
    ],
    modules: [
      { name: "POS", desc: "Fast order taking for dine-in, takeaway and delivery, with split bills and printed receipts." },
      { name: "Menu & Recipes", desc: "Menu items, variants and recipes that link to ingredient stock." },
      { name: "Branches", desc: "A master branch controls menus, prices and users across all branches." },
      { name: "Supply Chain", desc: "Purchasing, supplier management and stock transfers between branches." },
      { name: "Delivery", desc: "Online and phone delivery orders with rider assignment and status tracking." },
      { name: "Reports", desc: "Sales, item-wise, branch-wise and stock reports." },
      { name: "Billing & Plans", desc: "SaaS subscription plans, tenant onboarding and plan limits." }
    ]
  },
  {
    slug: "point-of-sale",
    title: "Point of Sale (POS) SaaS",
    tagline: "A subscription-based POS with counters, shelves and a business admin.",
    category: "Retail SaaS",
    type: "SaaS",
    stack: ["Python", "SaaS", "PostgreSQL"],
    accent: "#2563eb",
    live: "https://python-pos.vercel.app/login/",
    summary: "Subscription POS with counter and shelf limits, where every business has its own admin.",
    overview:
      "A POS SaaS for retail businesses. Each business gets its own admin, counter users and shelf management, and limits apply according to the subscription plan.",
    features: [
      "Fast billing counter",
      "Plan-based counter and shelf limits",
      "Business admin and counter users",
      "Products, stock and barcode",
      "Sales, returns and receipts",
      "Daily sales reports"
    ],
    modules: [
      { name: "Counters", desc: "Multiple billing counters per business, each with its own user, limited by the subscription plan." },
      { name: "Products & Shelves", desc: "Products, categories, barcodes and shelf allocation, with limits per plan." },
      { name: "Sales & Returns", desc: "Quick sale billing, discounts, taxes, returns and printable receipts." },
      { name: "Users & Roles", desc: "Business admin and counter users with separate permissions." },
      { name: "Subscriptions", desc: "Plans that define how many counters and shelves a business can use." },
      { name: "Reports", desc: "Daily sales, product-wise and counter-wise reports." }
    ]
  },
  {
    slug: "society-billing",
    title: "Society Billing & Maintenance",
    tagline: "Bills, maintenance and collections for housing societies, all in one place.",
    category: "Real Estate",
    type: "Software",
    stack: ["CodeIgniter 3", "MySQL", "Bootstrap", "jQuery"],
    accent: "#9333ea",
    live: null,
    summary: "Utility billing, maintenance charges and recovery for residential societies.",
    overview:
      "A system for society offices that manages members, plots or units, maintenance and utility bills, and keeps track of payments and outstanding amounts.",
    features: [
      "Member and unit/plot records",
      "Monthly maintenance and utility bills",
      "Payment collection and receipts",
      "Outstanding and defaulter tracking",
      "Multi-society (multi-tenant) support",
      "Billing and recovery reports"
    ],
    modules: [
      { name: "Members & Units", desc: "Member records linked to plots or units, with ownership and contact details." },
      { name: "Billing", desc: "Generates monthly maintenance and utility bills for every unit in a few clicks." },
      { name: "Collections", desc: "Record payments, issue receipts and apply them against outstanding bills." },
      { name: "Complaints", desc: "Log resident complaints and track them until they are resolved." },
      { name: "Reports", desc: "Defaulter lists, collection and outstanding reports." },
      { name: "Admin", desc: "Manage societies, users, charge heads and settings." }
    ]
  },
  {
    slug: "ecommerce-store",
    title: "E-commerce Store",
    tagline: "A custom online store in CodeIgniter with an admin panel.",
    category: "E-commerce",
    type: "Website",
    stack: ["CodeIgniter 3", "MySQL", "Bootstrap", "jQuery"],
    accent: "#db2777",
    live: null,
    summary: "A complete online store with products, cart, checkout and orders.",
    overview:
      "A custom e-commerce store where customers browse products, add them to the cart and place orders, while an admin panel manages products, orders and customers.",
    features: [
      "Product catalog and categories",
      "Cart and checkout",
      "Customer accounts and order history",
      "Admin panel for products, orders and customers",
      "Order status management",
      "Mobile-friendly design"
    ],
    modules: [
      { name: "Catalog", desc: "Products with categories, images, prices, variants and stock." },
      { name: "Cart & Checkout", desc: "A shopping cart and a simple checkout with delivery details." },
      { name: "Orders", desc: "Order management from placement to delivery, with status updates." },
      { name: "Customers", desc: "Customer accounts, addresses and order history." },
      { name: "Admin Panel", desc: "One panel to manage products, orders, customers and store settings." }
    ]
  },
  {
    slug: "leads-system",
    title: "Leads Management System",
    tagline: "A multi-role CRM with lead assignment, agent notes and an approval workflow.",
    category: "CRM",
    type: "CRM",
    stack: ["CodeIgniter 3", "MySQL", "Bootstrap", "jQuery"],
    accent: "#ca8a04",
    live: null,
    summary: "The full lead workflow for Admin, Report Manager, Agent and Closer roles.",
    overview:
      "A CRM that imports, assigns and tracks leads. Agents work their leads and write notes, and deals are closed through closers and an approval workflow.",
    features: [
      "Lead import (CSV/XLSX) and manual add",
      "Role-based lead distribution",
      "Agent notepad and follow-ups",
      "Approval workflow",
      "Status tracking and pipeline",
      "Performance reports"
    ],
    modules: [
      { name: "Leads", desc: "Import leads from CSV or XLSX, or add them manually, with duplicate checks." },
      { name: "Assignment", desc: "Role-based distribution of leads to agents, with re-assignment when needed." },
      { name: "Agent Notepad", desc: "Notes and follow-up reminders attached to each lead." },
      { name: "Approvals", desc: "Closers and managers review and approve deals through a defined workflow." },
      { name: "Users & Roles", desc: "Admin, Report Manager, Agent and Closer roles with separate access." },
      { name: "Reports", desc: "Lead status, agent performance and conversion reports." }
    ]
  }
];
