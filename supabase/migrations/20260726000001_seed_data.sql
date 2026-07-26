-- Données de démonstration
INSERT INTO categories (slug, name, icon, description, sort_order) VALUES
  ('ebooks', 'E-books', '📚', 'Livres numériques sur des sujets variés', 1),
  ('education', 'Éducation', '🎓', 'Ressources éducatives et supports d''apprentissage', 2),
  ('developpement-personnel', 'Développement personnel', '💡', 'Guides pour votre épanouissement personnel', 3),
  ('guides-pratiques', 'Guides pratiques', '📖', 'Guides concrets pour la vie quotidienne', 4),
  ('contenus-haoussa', 'Contenus en haoussa', '🌍', 'Littattafai da albarkatu cikin harshen Hausa', 5),
  ('formations', 'Formations', '🖥️', 'Formations numériques complètes', 6)
ON CONFLICT (slug) DO NOTHING;

-- Voir la migration séparée pour les produits de démo
