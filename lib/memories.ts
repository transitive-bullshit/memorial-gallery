import type { StaticImageData } from 'next/image'

import applePiesImage from '@/media/17-apple-pies-rubber-stamp-field-notes-opt.jpg'
import autumnLeafCookiesImage from '@/media/24-autumn-leaf-cookies-rubber-stamp-field-notes-opt.jpg'
import barbAndDougImage from '@/media/35-barb-and-doug-rubber-stamp-field-notes-opt.jpg'
import broadwayNightImage from '@/media/15-broadway-night-rubber-stamp-field-notes-opt.jpg'
import castelloDiAmorosaImage from '@/media/04-castello-di-amorosa-rubber-stamp-field-notes-opt.jpg'
import chicagoTransitImage from '@/media/29-chicago-transit-rubber-stamp-field-notes-opt.jpg'
import christmasCookiesImage from '@/media/06-christmas-cookies-rubber-stamp-field-notes-opt.jpg'
import christmasWithDaughtersImage from '@/media/27-christmas-with-daughters-rubber-stamp-field-notes-opt.jpg'
import colonialWilliamsburgImage from '@/media/36-colonial-williamsburg-rubber-stamp-field-notes-opt.jpg'
import communityGatheringImage from '@/media/10-community-gathering-rubber-stamp-field-notes-opt.jpg'
import electionDayImage from '@/media/21-election-day-rubber-stamp-field-notes-opt.jpg'
import elkhornHalloweenImage from '@/media/16-elkhorn-halloween-rubber-stamp-field-notes-opt.jpg'
import elkhornSchoolBoardImage from '@/media/07-elkhorn-school-board-rubber-stamp-field-notes-opt.jpg'
import familyDeckFourImage from '@/media/37-family-deck-four-rubber-stamp-field-notes-opt.jpg'
import familyDeckLaughterImage from '@/media/38-family-deck-laughter-rubber-stamp-field-notes-opt.jpg'
import familyDeckThreeImage from '@/media/39-family-deck-three-rubber-stamp-field-notes-opt.jpg'
import homeChristmasTreeImage from '@/media/19-home-christmas-tree-rubber-stamp-field-notes-opt.jpg'
import homeHearthImage from '@/media/23-home-hearth-rubber-stamp-field-notes-opt.jpg'
import homePatioReadingImage from '@/media/02-home-patio-reading-rubber-stamp-field-notes-opt.jpg'
import hudsonYardsImage from '@/media/13-hudson-yards-rubber-stamp-field-notes-opt.jpg'
import japaneseTeaGardenImage from '@/media/01-japanese-tea-garden-rubber-stamp-field-notes-opt.jpg'
import japaneseTeaGardenPagodaImage from '@/media/25-japanese-tea-garden-pagoda-rubber-stamp-field-notes-opt.jpg'
import lakeGenevaToastImage from '@/media/12-lake-geneva-toast-rubber-stamp-field-notes-opt.jpg'
import lakeGenevaWaterfrontImage from '@/media/28-lake-geneva-waterfront-rubber-stamp-field-notes-opt.jpg'
import milwaukeeAirportImage from '@/media/09-milwaukee-airport-rubber-stamp-field-notes-opt.jpg'
import milwaukeeBallparkImage from '@/media/11-milwaukee-ballpark-rubber-stamp-field-notes-opt.jpg'
import milwaukeeMemoriesImage from '@/media/08-milwaukee-memories-rubber-stamp-field-notes-opt.jpg'
import mouseCookieImage from '@/media/18-mouse-cookie-rubber-stamp-field-notes-opt.jpg'
import pasqualesCantinaImage from '@/media/31-pasquales-cantina-rubber-stamp-field-notes-opt.jpg'
import patioCatReadingImage from '@/media/22-patio-cat-reading-rubber-stamp-field-notes-opt.jpg'
import potteryStudioImage from '@/media/20-pottery-studio-rubber-stamp-field-notes-opt.jpg'
import readingTableImage from '@/media/14-reading-table-rubber-stamp-field-notes-opt.jpg'
import sanFranciscoBayImage from '@/media/05-san-francisco-bay-rubber-stamp-field-notes-opt.jpg'
import summerEveningImage from '@/media/33-summer-evening-rubber-stamp-field-notes-opt.jpg'
import theaterNightImage from '@/media/30-theater-night-rubber-stamp-field-notes-opt.jpg'
import threeGenerationsImage from '@/media/34-three-generations-rubber-stamp-field-notes-opt.jpg'
import unionSquareHeartImage from '@/media/03-union-square-heart-rubber-stamp-field-notes-opt.jpg'
import wisconsinHomeImage from '@/media/32-wisconsin-home-rubber-stamp-field-notes-opt.jpg'
import youngLoveImage from '@/media/26-young-love-rubber-stamp-field-notes-opt.jpg'

export type Memory = Readonly<{
  slug: string
  title: string
  alt: string
  image: StaticImageData
}>

function createMemory(
  image: StaticImageData,
  slug: string,
  title: string
): Memory {
  return Object.freeze({
    slug,
    title,
    alt: `Memory: ${title}`,
    image
  })
}

export const memories: readonly Memory[] = Object.freeze([
  createMemory(
    japaneseTeaGardenImage,
    'japanese-tea-garden',
    'Japanese Tea Garden'
  ),
  createMemory(
    homePatioReadingImage,
    'home-patio-reading',
    'Home Patio Reading'
  ),
  createMemory(
    unionSquareHeartImage,
    'union-square-heart',
    'Union Square Heart'
  ),
  createMemory(
    familyDeckLaughterImage,
    'family-deck-laughter',
    'Family Deck Laughter'
  ),
  createMemory(sanFranciscoBayImage, 'san-francisco-bay', 'San Francisco Bay'),
  createMemory(christmasCookiesImage, 'christmas-cookies', 'Christmas Cookies'),
  createMemory(
    elkhornSchoolBoardImage,
    'elkhorn-school-board',
    'Elkhorn School Board'
  ),
  createMemory(
    milwaukeeMemoriesImage,
    'milwaukee-memories',
    'Milwaukee Memories'
  ),
  createMemory(milwaukeeAirportImage, 'milwaukee-airport', 'Milwaukee Airport'),
  createMemory(
    communityGatheringImage,
    'community-gathering',
    'Community Gathering'
  ),
  createMemory(
    milwaukeeBallparkImage,
    'milwaukee-ballpark',
    'Milwaukee Ballpark'
  ),
  createMemory(lakeGenevaToastImage, 'lake-geneva-toast', 'Lake Geneva Toast'),
  createMemory(hudsonYardsImage, 'hudson-yards', 'Hudson Yards'),
  createMemory(readingTableImage, 'reading-table', 'Reading Table'),
  createMemory(broadwayNightImage, 'broadway-night', 'Broadway Night'),
  createMemory(elkhornHalloweenImage, 'elkhorn-halloween', 'Elkhorn Halloween'),
  createMemory(applePiesImage, 'apple-pies', 'Apple Pies'),
  createMemory(mouseCookieImage, 'mouse-cookie', 'Mouse Cookie'),
  createMemory(
    homeChristmasTreeImage,
    'home-christmas-tree',
    'Home Christmas Tree'
  ),
  createMemory(familyDeckFourImage, 'family-deck-four', 'Family Deck Four'),
  createMemory(potteryStudioImage, 'pottery-studio', 'Pottery Studio'),
  createMemory(electionDayImage, 'election-day', 'Election Day'),
  createMemory(patioCatReadingImage, 'patio-cat-reading', 'Patio Cat Reading'),
  createMemory(homeHearthImage, 'home-hearth', 'Home Hearth'),
  createMemory(
    autumnLeafCookiesImage,
    'autumn-leaf-cookies',
    'Autumn Leaf Cookies'
  ),
  createMemory(
    japaneseTeaGardenPagodaImage,
    'japanese-tea-garden-pagoda',
    'Japanese Tea Garden Pagoda'
  ),
  createMemory(youngLoveImage, 'young-love', 'Young Love'),
  createMemory(
    christmasWithDaughtersImage,
    'christmas-with-daughters',
    'Christmas with Daughters'
  ),
  createMemory(
    lakeGenevaWaterfrontImage,
    'lake-geneva-waterfront',
    'Lake Geneva Waterfront'
  ),
  createMemory(chicagoTransitImage, 'chicago-transit', 'Chicago Transit'),
  createMemory(theaterNightImage, 'theater-night', 'Theater Night'),
  createMemory(
    pasqualesCantinaImage,
    'pasquales-cantina',
    "Pasquale's Cantina"
  ),
  createMemory(wisconsinHomeImage, 'wisconsin-home', 'Wisconsin Home'),
  createMemory(
    castelloDiAmorosaImage,
    'castello-di-amorosa',
    'Castello di Amorosa'
  ),
  createMemory(summerEveningImage, 'summer-evening', 'Summer Evening'),
  createMemory(threeGenerationsImage, 'three-generations', 'Three Generations'),
  createMemory(barbAndDougImage, 'barb-and-doug', 'Barb and Doug'),
  createMemory(
    colonialWilliamsburgImage,
    'colonial-williamsburg',
    'Colonial Williamsburg'
  ),
  createMemory(familyDeckThreeImage, 'family-deck-three', 'Family Deck Three')
])

const memoryLookup = new Map(
  memories.map((memory, index) => [memory.slug, { memory, index }] as const)
)

export function getMemoryBySlug(slug: string): Memory | undefined {
  return memoryLookup.get(slug)?.memory
}

export function getMemoryIndexBySlug(slug: string): number | undefined {
  return memoryLookup.get(slug)?.index
}
