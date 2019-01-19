module.exports = function (sequelize, DataTypes) {
    var Build = sequelize.define("Build", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        buildType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Build.associate = function (models) {
        Build.belongsTo(models.Customer, {
            onDelete: "cascade"
        });
    };
    return Build;
};