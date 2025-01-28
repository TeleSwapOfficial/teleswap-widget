# Teleswap Widget React

A React component for integrating the Teleswap cross-chain swap widget into your application.

## Installation

`npm install teleswap-widget` or `yarn add teleswap-widget`

## Usage

```
import { TeleswapWidget } from 'teleswap-widget';

function App() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
        <TeleswapWidget
                apiKey="your-api-key"
                fromCoin="eth"
                toCoin="sol"
                theme="dark"
            />
        </div>
    );
}
```

## Props

| Prop              | Type              | Default      | Description                     |
| ----------------- | ----------------- | ------------ | ------------------------------- |
| `apiKey`          | string            | **Required** | Your Teleswap API key           |
| `fromCoin`        | string            | 'sol'        | Source cryptocurrency ticker    |
| `toCoin`          | string            | 'ton'        | Target cryptocurrency ticker    |
| `dexAssetAddress` | string            | undefined    | Target dex asset address        |
| `theme`           | 'light' \| 'dark' | 'light'      | Widget theme                    |
| `width`           | number \| string  | 360          | Widget width (px or CSS value)  |
| `height`          | number \| string  | 350          | Widget height (px or CSS value) |
| `buttonColor`     | string            | undefined    | Custom button color (hex/rgb)   |
| `borderColor`     | string            | undefined    | Custom border color (hex/rgb)   |
| `logoUrl`         | string            | undefined    | Custom logo URL                 |

## Example with All Props

jsx

```
<TeleswapWidget
    height={350}
    width={360}
    fromCoin="eth"
    toCoin="trx"
    borderColor="#10AB59"
    buttonColor="#10AB59"
    theme="dark"
    logoUrl="https://example.com/logo.png"
    apiKey="your-api-key"
/>
```

```
<TeleswapWidget
    height={350}
    width={360}
    fromCoin="eth"
    dexAssetAddress="EQAGYK08DaJaQpmZESz3y9gqi7rmpoBiyKQru-firOwqPzR4"
    borderColor="#10AB59"
    buttonColor="#10AB59"
    theme="dark"
    logoUrl="https://example.com/logo.png"
    apiKey="your-api-key"
/>
```

## Styling

The widget has minimum dimensions of 360x300 pixels. You can customize the size by:

- Using numeric values (automatically converted to pixels):

`<TeleswapWidget width={400} height={600} />`

- Using string values with units:

`<TeleswapWidget width="400px" height="600px" />`

- Using percentage values:
  `<TeleswapWidget width="100%" height="100%" />`

## Setting Tokens

You can select the token from and token to.
`fromCoin` and `toCoin` is the token ticker, see avaiable tokens [here](https://teleswap.io/#/widget)

If you want to set a dex asset to be swapped to you should use the token address on the field `dexAssetAddress`. Only tokens from Ton and Solana are avaiable.

## API key

To generate your API key fill this [form](https://teleswap.io/#/widget)

## License

MIT

## Support

For support, please visit [Teleswap Documentation](https://docs.teleswap.io) or contact our support team.
