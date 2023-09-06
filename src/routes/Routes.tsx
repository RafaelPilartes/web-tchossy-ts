import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routsNameMain } from '../data/routsName'
import RootLayoutMain from '../Layout/RootLayoutMain'
import Loading from '../pages/loading'

const Home = React.lazy(() => import('../pages/main'))
const About = React.lazy(() => import('../pages/main/about'))

const Service = React.lazy(() => import('../pages/main/services/'))
const WebsiteService = React.lazy(
  () => import('../pages/main/services/website')
)
const ChatbotService = React.lazy(
  () => import('../pages/main/services/chatbot')
)
const ECommerceService = React.lazy(
  () => import('../pages/main/services/eCommerce')
)
const MobileService = React.lazy(() => import('../pages/main/services/mobile'))
const SystemService = React.lazy(() => import('../pages/main/services/system'))
const SocialMediaManagementService = React.lazy(
  () => import('../pages/main/services/socialMediaManagement')
)
const SeoAndWebsiteOptimizationService = React.lazy(
  () => import('../pages/main/services/seoAndWebsiteOptimization')
)
const GoogleAdsService = React.lazy(
  () => import('../pages/main/services/googleAds')
)
const SponsoredLinksService = React.lazy(
  () => import('../pages/main/services/sponsoredLinks')
)
const ContentMarketingService = React.lazy(
  () => import('../pages/main/services/contentMarketing')
)
const DomainService = React.lazy(() => import('../pages/main/services/domains'))
const AccommodationService = React.lazy(
  () => import('../pages/main/services/accommodation')
)
const DrandAndDesignService = React.lazy(
  () => import('../pages/main/services/brandAndDesign')
)
const EmailProfessionalService = React.lazy(
  () => import('../pages/main/services/emailProfessional')
)

const Team = React.lazy(() => import('../pages/main/team'))
const TeamMember = React.lazy(() => import('../pages/main/team/teamMember'))
const Testimonial = React.lazy(() => import('../pages/main/testimonial'))
const Pricing = React.lazy(() => import('../pages/main/pricing'))
const Faq = React.lazy(() => import('../pages/main/faq'))
const Blog = React.lazy(() => import('../pages/main/blog'))
const Post = React.lazy(() => import('../pages/main/blog/post'))
const BlogSearch = React.lazy(() => import('../pages/main/blog/search'))
const Contact = React.lazy(() => import('../pages/main/contact'))
const FourOhFour = React.lazy(() => import('../pages/404'))
const Projects = React.lazy(() => import('../pages/main/projects'))
const Project = React.lazy(() => import('../pages/main/projects/project'))

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayoutMain />}>
          {/* Home */}
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />
          {/* About */}
          <Route
            path={routsNameMain.about}
            element={
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            }
          />
          {/* Chatbot */}
          <Route
            path={routsNameMain.service.chatbot}
            element={
              <React.Suspense fallback={<Loading />}>
                <ChatbotService />
              </React.Suspense>
            }
          />
          {/* Services */}
          <Route
            path={routsNameMain.service.index}
            element={
              <React.Suspense fallback={<Loading />}>
                <Service />
              </React.Suspense>
            }
          />
          {/* Service -> website */}
          <Route
            path={routsNameMain.service.website}
            element={
              <React.Suspense fallback={<Loading />}>
                <WebsiteService />
              </React.Suspense>
            }
          />
          {/* Service -> eCommerce */}
          <Route
            path={routsNameMain.service.eCommerce}
            element={
              <React.Suspense fallback={<Loading />}>
                <ECommerceService />
              </React.Suspense>
            }
          />
          {/* Service -> mobile */}
          <Route
            path={routsNameMain.service.mobile}
            element={
              <React.Suspense fallback={<Loading />}>
                <MobileService />
              </React.Suspense>
            }
          />
          {/* Service -> system */}
          <Route
            path={routsNameMain.service.system}
            element={
              <React.Suspense fallback={<Loading />}>
                <SystemService />
              </React.Suspense>
            }
          />
          {/* Service -> socialMediaManagement */}
          <Route
            path={routsNameMain.service.socialMediaManagement}
            element={
              <React.Suspense fallback={<Loading />}>
                <SocialMediaManagementService />
              </React.Suspense>
            }
          />
          {/* Service -> seoAndWebsiteOptimization */}
          <Route
            path={routsNameMain.service.seoAndWebsiteOptimization}
            element={
              <React.Suspense fallback={<Loading />}>
                <SeoAndWebsiteOptimizationService />
              </React.Suspense>
            }
          />
          {/* Service -> googleAds */}
          <Route
            path={routsNameMain.service.googleAds}
            element={
              <React.Suspense fallback={<Loading />}>
                <GoogleAdsService />
              </React.Suspense>
            }
          />
          {/* Service -> sponsoredLinks */}
          <Route
            path={routsNameMain.service.sponsoredLinks}
            element={
              <React.Suspense fallback={<Loading />}>
                <SponsoredLinksService />
              </React.Suspense>
            }
          />
          {/* Service -> contentMarketing */}
          <Route
            path={routsNameMain.service.contentMarketing}
            element={
              <React.Suspense fallback={<Loading />}>
                <ContentMarketingService />
              </React.Suspense>
            }
          />
          {/* Service -> domain */}
          <Route
            path={routsNameMain.service.domain}
            element={
              <React.Suspense fallback={<Loading />}>
                <DomainService />
              </React.Suspense>
            }
          />
          {/* Service -> accommodation */}
          <Route
            path={routsNameMain.service.accommodation}
            element={
              <React.Suspense fallback={<Loading />}>
                <AccommodationService />
              </React.Suspense>
            }
          />
          {/* Service -> brandAndDesign */}
          <Route
            path={routsNameMain.service.brandAndDesign}
            element={
              <React.Suspense fallback={<Loading />}>
                <DrandAndDesignService />
              </React.Suspense>
            }
          />
          {/* Service -> emailProfessional */}
          <Route
            path={routsNameMain.service.emailProfessional}
            element={
              <React.Suspense fallback={<Loading />}>
                <EmailProfessionalService />
              </React.Suspense>
            }
          />

          {/* Blog */}
          <Route
            path={routsNameMain.blog.index}
            element={
              <React.Suspense fallback={<Loading />}>
                <Blog />
              </React.Suspense>
            }
          />
          {/* Post */}
          <Route
            path="blog/post/:postId/:postName"
            element={
              <React.Suspense fallback={<Loading />}>
                <Post />
              </React.Suspense>
            }
          />
          {/* BlogSearch */}
          <Route
            path="blog/search/category/:categoryName"
            element={
              <React.Suspense fallback={<Loading />}>
                <BlogSearch />
              </React.Suspense>
            }
          />
          {/* Projects */}
          <Route
            path={routsNameMain.otherPages.projects.index}
            element={
              <React.Suspense fallback={<Loading />}>
                <Projects />
              </React.Suspense>
            }
          />
          {/* Project */}
          <Route
            path="projects/details/:projectId/:projectName"
            element={
              <React.Suspense fallback={<Loading />}>
                <Project />
              </React.Suspense>
            }
          />
          {/* Team */}
          <Route
            path={routsNameMain.otherPages.team.index}
            element={
              <React.Suspense fallback={<Loading />}>
                <Team />
              </React.Suspense>
            }
          />
          {/* TeamMember */}
          <Route
            path="team/details/:memberId/:memberName"
            element={
              <React.Suspense fallback={<Loading />}>
                <TeamMember />
              </React.Suspense>
            }
          />
          {/* Testimonial */}
          <Route
            path={routsNameMain.otherPages.testimonial}
            element={
              <React.Suspense fallback={<Loading />}>
                <Testimonial />
              </React.Suspense>
            }
          />
          {/* Pricing */}
          <Route
            path={routsNameMain.otherPages.pricing}
            element={
              <React.Suspense fallback={<Loading />}>
                <Pricing />
              </React.Suspense>
            }
          />
          {/* Faq */}
          <Route
            path={routsNameMain.otherPages.faq}
            element={
              <React.Suspense fallback={<Loading />}>
                <Faq />
              </React.Suspense>
            }
          />
          {/* Contact */}
          <Route
            path={routsNameMain.contact}
            element={
              <React.Suspense fallback={<Loading />}>
                <Contact />
              </React.Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading />}>
              <FourOhFour />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
