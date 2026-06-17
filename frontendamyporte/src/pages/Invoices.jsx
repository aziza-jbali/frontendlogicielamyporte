import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {motion,AnimatePresence} from "framer-motion";
import Cards from '../components/Cards.jsx';
export default function invoices() {
  return (
    <div>
        {/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
    




























{/* 
    <div className="min-h-screen   flex bg-linear-to-b from-[#faf6ef] to-[#f0e5d2] items-center justify-center p-6 fff">  <div className="flex flex-col items-center mb-8 fff">
         
         
      
         
         </div></div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */}
       
        

<div className="flex flex-col md:flex-row  min-h-screen  items-center justify-center p-32">
  <div className='flex  flex-col md:flex-row flex-wrap p-10'>
    <div className='w-full md:w-1/2  p-4 ' >
    <Cards icon="fas fa-check-circle"
        title="Annonces fiables"
        description="Toutes nos annonces sont vérifiées afin d'assurer sécurité et fiabilité pour les utilisateurs."/>
    
  </div>
<div className='w-full md:w-1/2  p-4' >
    <Cards icon="fa-solid fa-truck"
        title="Bon de livraison"
        description="Toutes nos annonces sont vérifiées afin d'assurer sécurité et fiabilité pour les utilisateurs." bgco= />

  </div>
  <div className='w-full md:w-1/2  p-4' >
    <Cards icon="fas fa-check-circle"
        title="Annonces fiables"
        description="Toutes nos annonces sont vérifiées afin d'assurer sécurité et fiabilité pour les utilisateurs."/>
    
  </div>
     <div className='w-full md:w-1/2  p-4' >
    <Cards icon="fas fa-check-circle"
        title="Annonces fiables"
        description="Toutes nos annonces sont vérifiées afin d'assurer sécurité et fiabilité pour les utilisateurs."/>
    
  </div>
   <div className='w-full md:w-1/2  p-4' >
    <Cards icon="fas fa-check-circle"
        title="Annonces fiables"
        description="Toutes nos annonces sont vérifiées afin d'assurer sécurité et fiabilité pour les utilisateurs."/>
    
  </div>
  </div>
</div>



      
  </div>

  )
}

        
