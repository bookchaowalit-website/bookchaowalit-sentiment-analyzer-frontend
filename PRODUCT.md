# Sentiment Analyzer — product truth

> Product truth inferred from the existing README, routes, copy, and implementation because this batch was explicitly authorized to proceed without an interview.

## Purpose

An honest, browser-local sentiment demo that shows how a small word lexicon turns a sentence into a directional signal.

## Current behavior

- The visitor edits one text sample in a textarea.
- The client tokenizes lowercase English words and checks them against fixed positive and negative lexicons.
- The result exposes `Positive`, `Negative`, or `Neutral`, a signed score, token count, and matched words.
- There is no model inference, backend, account, persistence, multi-tenant data, or production moderation claim.

## Boundaries

This is a portfolio experiment for explaining lexicon scoring, not an ML classifier. Copy and UI should make the word-list mechanism visible and avoid implying semantic understanding beyond the authored vocabulary.
