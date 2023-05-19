import * as dotenv from 'dotenv'

dotenv.config()
const server: any = () => {
    console.log(`Server Running On ${process.env.HOST}:${process.env.PORT}`);
    return null;
}
export default server;
