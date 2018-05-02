module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("burger", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    burger_name: {
        type: DataTypes.STRING
    },
    votes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
    }, {
    timestamps: true
    });

    Burger.associate = function (models) {
        models.burger.belongsTo(models.user, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Burger;
}