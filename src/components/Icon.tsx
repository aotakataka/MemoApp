import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

import fontData from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,
    'IcoMoon',
    'icomoon.ttf'
)

const Icon = (): JSX.Element | null => {
    const [fontLoaded] = useFonts({
        IcoMoon: fontData
    })
    if (!fontLoaded) {
        return null
    }
    return (
        <CustomIcon name = 'plus' size = {40} color = 'red' />
    )
}

export default Icon