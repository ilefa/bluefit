# Bluefit

![version badge](https://img.shields.io/badge/version-1.0.0-blue)

Bluefit is a TypeScript library that allows you to easily fetch the realtime occupancy of the Rec Center.

Big thanks to [u/MasterEjzz](https://reddit.com/u/MasterEjzz) for discovering how to do this first for their super cool automated [data tracking](https://www.reddit.com/r/UCONN/comments/sh4d63/i_tracked_an_entire_semesters_worth_of_occupancy/) spreadsheet in Google Sheets.

## Installation

Use npm to install Bluefit.

```bash
npm install @ilefa/bluefit
```

Since Bluefit is currently hosted on GitHub packages, you will need to make a ``.npmrc`` file in the root of your project, and insert the following:

```env
@ilefa:registry=https://npm.pkg.github.com
```

## Usage

```ts
import { getOccupancy } from '@ilefa/bluefit';

// Fetch current occupancy of the Rec Center
let meals = await getOccupancy();

12
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)