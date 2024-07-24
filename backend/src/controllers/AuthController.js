import { createUser , findUserByEmail} from '../models/User.js';

export const signup = async (req, res) => {
  try {
    const data = req.body;
    const user = await findUserByEmail(data.email);
    if (user) {
      res.status(500).json({
        error: "Email already exists!",
      });
      return;
    }

    // Criar o usuário
    await createUser(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    );

    res.send("User registered succefully");
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create user", message: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password }  = req.body;
    // Verificar se o email existe
    const user = await findUserByEmail(email);
    
    if (!user || user.password !== password) {
      res.status(401).json({ error: "Email or password invalid!" });
      return;
    }

    // Retornar o status
    res.status(200).json({ userId: user.id, email ,senha: user.password});
  } catch (error) {
    res.status(500).json({ error: "Failed to log in", message: error.message });
  }
};

















/*
export const signup = async (req, res) => {

    try {   //Verifica se email ja existe
      const data = req.body;
      const user = await findUserByEmail(data.email);
      if (user) {
        res.status(500).json({
          error: "Email already exists!",
        });
        return;
      }
      // Criar o usuário

      const passwordHash = await bcrypt.hash(password, 10);

      await createUser(
        {
          name: data.name,
          email: data.email,
          passwordHash,
        },
      );
  
      res.send("User registered succefully");
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to create user", message: error.message });
    }
  };

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await findUserByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Invalid email or password');
        }

        res.send('Login successful');

    } catch (error) {
        res.status(500).json({ error: "Failed to log in", message: error.message });
    }
}
    */