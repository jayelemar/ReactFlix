const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    // other user-related fields
  });
  
  const roleSchema = new mongoose.Schema({
    roleName: String,
    // other role-related fields
  });
  
  const mergedDataSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    // other merged data fields
  });
  const User = mongoose.model('User', userSchema);
  const Role = mongoose.model('Role', roleSchema);
  const MergedData = mongoose.model('MergedData', mergedDataSchema);
    