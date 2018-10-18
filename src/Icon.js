// TODO: Make automatic imports

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

// What if I could change this to automatically import icons?
// How would that impact performance?

export default Icon;
