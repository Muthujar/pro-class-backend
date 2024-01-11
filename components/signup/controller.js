
const Users=require('../../modals/user.modal')



module.exports = {
    signUpUsers: async (req, res, next) => {
      try {
        // const results = await Users.find({}, { __v: 0 });
        const results = await Users.save();

        console.log('ff')

        // const results = await Product.find({}, { name: 1, price: 1, _id: 0 });
        // const results = await Product.find({ price: 699 }, {});
        res.send(results);
      } catch (error) {
        console.log(error.message);
      }
    },

}