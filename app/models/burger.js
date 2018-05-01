module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("burgers", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    burger_name: {
        type: DataTypes.STRING
    },
    onMenu: {
        type: DataTypes.BOOLEAN
    },
    customer_id: {
        type: DataTypes.INTEGER
    }
    }, {
    timestamps: true
    });

    return Burger;
}