export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtpoProps = {
  url: string
  label: string
}

export type Image = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtpoProps
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type TechIconProps = {
  title: string
  icon: {
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: Array<TechIconProps>
}

export type ConceptsProps = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<ConceptsProps>
}

export type ModulesProps = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Array<ModulesProps>
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtpoProps
}

export type SocialLinksProps = {
  title: string
  url: string
}

export type AuthorProps = {
  name: string
  role: string
  description: string
  photo: Image
  socialLinks: Array<SocialLinksProps>
}

export type AboutUsProps = {
  text: string
  authors: Array<AuthorProps>
}

export type ReviewItemProps = {
  id: number
  name: string
  review: string
  photo: Image
}

export type ReviewsProps = {
  title: string
  reviews: Array<ReviewItemProps>
}

export type QuestionProps = {
  question: string
  answer: string
}

export type FaqProps = {
  title: string
  questions: Array<QuestionProps>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: AboutUsProps
  sectionReviews: ReviewsProps
  sectionFaq: FaqProps
}
