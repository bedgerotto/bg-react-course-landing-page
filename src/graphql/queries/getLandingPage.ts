const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment aboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment tech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          name
          url
        }
      }
    }
  }

  fragment concepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment modules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment agenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment aboutUs on LandingPage {
    sectionAboutUs {
      text
      authors {
        name
        role
        description
        socialLinks {
          title
          url
        }
        photo {
          alternativeText
          url
        }
      }
    }
  }

  fragment reviews on LandingPage {
    sectionReviews {
      title
      reviews {
        id
        name
        review
        photo {
          alternativeText
          url
        }
      }
    }
  }

  fragment faq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutProject
      ...tech
      ...concepts
      ...modules
      ...agenda
      ...pricingBox
      ...aboutUs
      ...reviews
      ...faq
    }
  }
`

export default GET_LANDING_PAGE
