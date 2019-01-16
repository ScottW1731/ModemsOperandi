module.exports = function (sequelize, DataTypes) {
    var Build = sequelize.define("Build", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
        // TODO: Integrate customerId somehow!
    })
}