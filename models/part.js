module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define("Part", {
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
        img_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: false
    });
    return Part;
};