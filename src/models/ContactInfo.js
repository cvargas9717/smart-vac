module.exports = (sequelize, DataTypes) => {
  var ContactInfo = sequelize.define('ContactInfo', {
      PhoneNumber: DataTypes.TEXT,
      Carrier: DataTypes.TEXT
  });

  ContactInfo.associate = (models) => {
    // associations can be defined here
  }

  //this is sequelize  lifecycle hook
  // ContactInfo.beforeCreate((user) =>
  //     new sequelize.Promise((resolve) => {
  //       bcrypt.hash(user.UniquePassword, null, null, (err, hashedPassword) => {
  //         resolve(hashedPassword);
  //       });
  //     }).then((hashedPw) => {
  //       user.UniquePassword = hashedPw;
  //     })
  //   );


  return ContactInfo;
};
