module.exports = function (sequelize, DataTypes) {
    var Build = sequelize.define("Build", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }, 
        category: {
            type:DataTypes.STRING,
            allowNull: true,
        }
    });

    Build.associate = function(models) {
        Build.belongsTo(models.Customer, {
            onDelete: "cascade"
        });
    };
    return Build;
};