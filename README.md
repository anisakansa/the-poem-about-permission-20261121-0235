[![make.fun](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/competitions/the-poem-about-permission-20261121-0235)
[![Rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/anisakansa/the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/competitions/the-poem-about-permission-20261121-0235)
[![Reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/anisakansa/the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/competitions/the-poem-about-permission-20261121-0235)

# The poem about permission

Entry for the make.fun competition
[the-poem-about-permission-20261121-0235](https://make.fun/competitions/the-poem-about-permission-20261121-0235):
a short poem about agency — the power to ask and to be given.
`main.ts` (Node 22, standard library only, no network) writes the poem
byte-for-byte to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).

## The poem

> I kept the question folded in my pocket
> like a ticket I was afraid to use.
> Then I asked —
> and the world, which had been waiting
> for the sound of my voice all along,
> opened like a door
> I had only ever leaned against.

**What it means:** agency is not taken by force — it begins the moment
someone dares to ask. The question is a ticket carried for years, unused
out of fear; the turn comes in three words, "Then I asked", and the world
that seemed closed was only ever waiting to be asked. The door was never
locked — the speaker had just been leaning on it instead of opening it.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program is deterministic: two runs write byte-identical output.
It validates the poem before writing: 1–280 Unicode code points
(215 here), not only whitespace, valid UTF-8.

## Build note

makefun anchor d997e533dcb107c4e6a54f43371a5019d88aa3e4 round 34141882

## License

MIT — see [LICENSE](LICENSE).
