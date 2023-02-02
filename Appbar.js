
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Appbar() {



    return (

        <AppBar className='bg-transparent flex justify-center items-center bg-black' color='transparent' style={{ boxShadow: "none", backgroundColor: 'black' }}>

            <Toolbar className=' w-full '>
                <div className='font-extrabold text-2xl  pt-2  px-8 w-7/12 flex justify-end items-center bg-black text-white' style={{ fontFamily: 'Bitter', flexDirection: 'row', display: 'flex' }}>
                    <img src='./logo.png' style={{ width: 180, height: 180, position: 'absolute', left: 0, cursor: 'pointer' }} onClick={() => { window.scrollTo({ behavior: "smooth", top: 0 }) }} />
                    <p> BakeMyDay</p>
                </div>
                <div className='w-5/12 flex justify-end'><InstagramIcon style={{ color: 'white' }} /></div>

            </Toolbar>

        </AppBar>


    )
}



