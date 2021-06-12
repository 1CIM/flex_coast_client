import React from 'react'
import Grid from '@material-ui/core/Grid'
import logo from '../assets/logoWhite.svg'
import CustomButton from './custom/CustomButton'
import { useTranslation } from 'react-i18next'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
      <Grid data-cy='footer' id='footer' container alignItems='center'>
        <Grid className='footer-header' item xs={12}>
          <img src={logo} alt='logo' className='logo' data-cy='flex-coast' />
          <hr className='top-hr' />
        </Grid>
        <Grid data-cy='footer-categories' container alignItems='flex-start'>
          <Grid data-cy='footer-about' className='sub-header' item sm={4}>
            <h3>About Us</h3>
            <p className='footer-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam neque porro voluptatem nisi dolor debitis deserunt et
              vitae quam odio?
            </p>
            <hr className='sub-hr' />
          </Grid>
          <Grid
            data-cy='footer-contact'
            className='sub-header'
            item
            xs={12}
            sm={4}>
            <h3>Contact</h3>
            <CustomButton dataCy='phone-number'>
              <a href='tel:+46812345678'>08-123 456 78</a>
            </CustomButton>
            <CustomButton dataCy='get-started' link to='/inquiry'>
              {t('landingPage.startButton')}
            </CustomButton>
            <hr className='sub-hr' />
          </Grid>
          <Grid data-cy='links' className='sub-header' item xs={12} sm={4}>
            <h3>Find Us</h3>
            <Grid>
              <IconButton>
                <FacebookIcon className='icon' fontSize='large' />
              </IconButton>
              <IconButton>
                <InstagramIcon className='icon' fontSize='large' />
              </IconButton>
              <IconButton>
                <TwitterIcon className='icon' fontSize='large' />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
