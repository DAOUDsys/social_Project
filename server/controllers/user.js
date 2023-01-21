import UserModel from "../models/user.js";

export const getUser = async (res, req) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(400).send(`there is no user have id: ${id}`);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
export const getUserFriends = async (res, req) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(400).send(`there is no user have id: ${id}`);

    const friends = await Promise.all(
      user.friends.map((id) => UserModel.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
export const addRemoveFriend = async (res, req) => {
  const id = req.params.id;
  const friendId = req.params.friendId;
  try {
    const user = await UserModel.findById(id);
    const friend = await UserModel.findById(friendId);

    if (!user) return res.status(400).send(`there is no user have id: ${id}`);
    if (!friend)
      return res.status(400).send(`there is no user have id: ${friendId}`);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((xid) => xid !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }

    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => UserModel.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
