module.exports = function (sequelize, DataTypes) {
    var build = sequelize.define("build", {
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

    build.associate = function (models) {
        build.belongsTo(models.customer, {
            onDelete: "cascade"
        });
    };
    return build;
};