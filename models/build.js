module.exports = function (sequelize, DataTypes) {
    var Build = sequelize.define("build", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // customerId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // }
    }, {
        timestamps: false
    });

    Build.associate = function (models) {
        Build.belongsTo(models.Customer, {
            onDelete: "cascade"
        });
    };
    return Build;
};