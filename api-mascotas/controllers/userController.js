exports.getUsers = (req, res) => {
    res.json([{ id: 1, name: 'admin' }]);
}

exports.createUser = (req, res) => {
    const newUser = req.body;
    res.status(201).json(newUser);
}

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    res.json({ id, ...updatedUser });
}

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Usuario ${id} eliminado` });
}