module.exports = function (sequelize, DataTypes) {
    var StaticBuild = sequelize.define("staticbuild", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        price: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cpu: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cpuprice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cooler: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        coolerprice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        motherboard: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        motherboardprice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        memory: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        memoryprice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        storage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        storageprice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gpu: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gpuprice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cse: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cseprice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        powersupply: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        powersupplyprice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    }, {
        timestamps: false
    });

    
    return StaticBuild;
};