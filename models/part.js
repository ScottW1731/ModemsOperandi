module.exports = function (sequelize, DataTypes) {
    var Part = sequelize.define("part", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Part;
};