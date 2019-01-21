module.exports = function (sequelize, DataTypes) {
    var Part = sequelize.define("Part", {
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
        },
        cost: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Part ;
};

