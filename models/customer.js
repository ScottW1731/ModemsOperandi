// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our Customer model
module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("customer", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            autoIncrement: true,
            validate: {
                len: [1]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // The email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // // The password cannot be null
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
    }, {
        timestamps: false
    });
    // Creating a custom method for our Customer model. This will check if an unhashed password entered by the Customer can be compared to the hashed password stored in our database
    Customer.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the Customer Model lifecycle
    // In this case, before a Customer is created, we will automatically hash their password
    Customer.hook("beforeCreate", function (Customer) {
        Customer.password = bcrypt.hashSync(Customer.password, bcrypt.genSaltSync(10), null);
    });
    Customer.associate = function (models) {
        Customer.hasMany(models.Build, {
            onDelete: "cascade"
        });
    };
    //  Associating Customer to many builds
    return Customer;
};