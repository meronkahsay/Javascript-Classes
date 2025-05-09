//You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
  }
  
  FeatureToggle.prototype.canAccess = function(userRole) {
    return  this.userGroupAccess.includes(userRole);
  };
  
  FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled=flag;
  };
 const feature = new FeatureToggle("login",true,["betaTesters","admins"]);
 console.log(feature.canAccess("admins"));
 feature.toggleFeature(true);
 let userRole = "guest";
 if (feature.canAccess(userRole)) {
    console.log("Access granted to feature.");
  } else {
    switch (userRole) {
      case "admins":
      case "betaTesters":
        console.log("Feature is not enabled.");
        break;
      default:
        console.log("Access denied.");
    }
  }
feature.canAccess(userRole);
  
 //In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

 function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
  }
  
  TimeLog.prototype.totalEarnings = function() {
    return this.logs.reduce((total, log) => total + log.hoursWorked * this.projectDetails.hourlyRate, 0);
  };
  
  TimeLog.prototype.filterByDate = function(startDate, endDate) {
    return this.logs.filter(log => log.date >= startDate && log.date <= endDate);
  };
  
  TimeLog.prototype.checkWeeklyHours = function() {
    let totalHours = this.logs.reduce((sum, log) => sum + log.hoursWorked, 0);
    if (totalHours > 40) {
      console.log(`${this.freelancerName} worked more than given hours this week`);
    } else {
      console.log(`${this.freelancerName} worked Within normal hours this week.`);
    }
  };
  
  let log = new TimeLog("Meron", { name: "Web App", hourlyRate: 20 }, [
    { date: "2025-05-01", hoursWorked: 10 },
    { date: "2025-05-03", hoursWorked: 18 },
    { date: "2025-05-05", hoursWorked: 15 },
  ]);
  
  console.log("Earnings:", log.totalEarnings());
  log.checkWeeklyHours();
  
  
  //You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.



  function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
  }
  
  Order.prototype.totalCost = function() {
    return this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  };
  
  Order.prototype.updateStatus = function(paymentReceived) {
    if (paymentReceived) {
      this.status = "Paid";
    } else {
      this.status = "Pending";
    }
  };
  
  Order.prototype.orderUrgency = function() {
    switch (this.status) {
      case "Pending":
        console.log("Order needs attention.");
        break;
      case "Paid":
        console.log("Order is being processed.");
        break;
      default:
        console.log("Order status unknown.");
    }
  };
 
  let order = new Order({ name: "Meron", email: "meron@example.com" }, [
    { productName: "pc", quantity: 2, unitPrice: 10 },
    { productName: "Keyboard", quantity: 1, unitPrice: 25 }
  ], "Paid");
  
  console.log("Total:", order.totalCost());
  order.updateStatus(true);
  order.orderUrgency();

  //In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.
  

function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
  }
  
  Employee.prototype.averageScore = function() {
    let scores = Object.values(this.performanceMetrics);
    return scores.reduce((a, b) => a + b) / scores.length;
  };
  
  Employee.prototype.classifyPerformance = function() {
    let avg = this.averageScore();
    if (avg >= 8) {
      console.log("Excellent performer.");
    } else if (avg >= 5) {
      console.log("Average performer.");
    } else {
      console.log("Needs improvement.");
    }
  };
  
  Employee.prototype.addFeedback = function(newFeedback) {
    if (newFeedback && newFeedback.length > 3) {
      this.feedback.push(newFeedback);
    } else {
      console.log("Feedback too short.");
    }
  };
  
  let emp = new Employee(11, "Meron", { communication: 5, efficiency: 29, reliability: 28 }, []);
  emp.classifyPerformance();
  emp.addFeedback("Best at problem-solving.");
  console.log(emp.feedback);
  

 // Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

 function Course(title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students;
  }
  
  Course.prototype.completedStudents = function() {
    return this.students.filter(s => s.completionStatus).map(s => s.name);
  };
  
  Course.prototype.countByExpertise = function(expertise) {
    return this.students.filter(s => this.instructor.expertise === expertise).length;
  };
  
  Course.prototype.trainerMessage = function() {
    let count = this.students.length;
    if (count >= 5) {
      console.log(`Traniner ${this.instructor.name} has a full class.`);
    } else {
      console.log(`Trainer ${this.instructor.name} can take more students.`);
    }
  };
  
  let course = new Course("DOM Basics", { name: "Ms.Hunter", expertise: "Web" }, [
    { name: "Fana", completionStatus: true },
    { name: "Brhanu", completionStatus: false },
    { name: "Hewan", completionStatus: true }
  ]);
  
  console.log("Completed:", course.completedStudents());
  course.trainerMessage();
  