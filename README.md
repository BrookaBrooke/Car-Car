# CarCar

Team:

- Josh - Automobile Sales
- Brooke - Automobile Services

## Design

## Sales microservice

The Sales microservice has four models. An AutomobileVO which is using a poller to poll the data from the Automobile model in the Inventory microservice. The AutomobileVO is polling VIN #'s as well as if an automobile has been sold, which defaults to false so we can track all automobiles in the Inventory. The next model created was SalesPerson, this model identifies different employees using a specific id, name, and employee number. The third model is the Customer model. The Customer model takes in and identifies customers using a specific id, name, address, and unique phone number. And then theres the last model the Automobile Sales Records model. This model is relient on each of the other three models in order to successfully generate records.

The views include a specific detail and list encoders for each model and also uses RESTFUL APIS to GET data from the list of sales, list of customers, as well as list of salespeople and the POST method to create future sales, customers, and salespeople.

## Services microservice

The Services microservice has three models. First, there is an Appointment model, which works with the poller to poll the appointment data, and also exists to identify which information is needed to set up an auto-service appointment. It has a foreign key with the technician model so that it may allocate which employee has which appointment. Next, there is the technician model, which hold the name and employee number of the technician so that they may be easily identifiable, especially if two people have a same, common name, for example. Finally, there is the vehicleVO model, which communicates with the automobile model so that we may allocate which vehicle has which appointment.

The views for this microservice have an encoder for each model, and an api for both the technician and appointment models.
