module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("user", {
    customer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customer_name: {
        type: DataTypes.STRING
    }
    }, {
    timestamps: true
    });

    User.associate = function(models) {
        models.user.hasMany(models.burger);
    };

    return User;
}