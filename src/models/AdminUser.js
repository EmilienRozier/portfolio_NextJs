import mongoose from "mongoose"

const AdminUsersSchema = new Schema({
    username: String,
    email: String,
    pass: String
});

const AdminUsers = mongoose.models.AdminUsers || mongoose.model('AdminUsers', AdminUsersSchema);

export default AdminUsers;