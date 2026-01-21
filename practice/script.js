const user = {
  profile: {
    /* address is missing */
  },
};

const city = user.profile?.address?.city;
console.log(city);
